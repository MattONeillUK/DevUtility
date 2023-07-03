const HTTP_STATUS_CODES = { Success: 200, BadRequest: 400 }
const HTTP_VERBS = { Get: "GET", Post: "POST" };
const REQUEST_HEADERS = { "Content-Type": "application/json" };

const API_STATUSES = { Stopped: "Stopped", Started: "Started" }

class ApiResponse {

    constructor(status, data) {
        this.Status = status;
        this.Data = data;
    }

}

const appPoolControls = ($controls) => {

    const url = `${window.location.origin}/api/apppoolapi`;

    const method = ($control) => {

        const name = $control.data('app-pool-name');

        async function postData(action) {

            const contextUrl = `${url}/${action}`;

            const response = await fetch(contextUrl, {
                method: HTTP_VERBS.Post,
                headers: REQUEST_HEADERS,
                body: JSON.stringify(name)
            });

            const result = response.status !== HTTP_STATUS_CODES.BadRequest && await response.json() || {};

            return new ApiResponse(response.status, result);
        }

        const updateDisplayClasses = (state) => {
            if (state === API_STATUSES.Started) {
                $control.removeClass('app-pool--stopped stopped').addClass('app-pool--running running');
                $control.find('.app-pool__state').removeClass('stopped').addClass('running');
            } else if (state === API_STATUSES.Stopped) {
                $control.removeClass('app-pool--running running').addClass('app-pool--stopped stopped');
                $control.find('.app-pool__state').removeClass('running').addClass('stopped');
            }
        }

        const run = ($el) => {

            if ($control.hasClass('pending')) {
                return;
            }

            let $statusLabel = $control.find('.app-pool__state');

            if ($control.hasClass('error')) {
                $control.removeClass('error shake-shake-shake');
            }

            $control.addClass('pending');
            if ($el.data('api-action') === 'recycle') {
                $statusLabel.text('Recycling');
            }

            postData($el.data('api-action')).then((result) => {

                if (result.Status === HTTP_STATUS_CODES.Success) {
                    $control.removeClass('error');

                    updateDisplayClasses(result.Data.state);

                }

                if (result.Status === HTTP_STATUS_CODES.BadRequest) {
                    $control.addClass('error shake-shake-shake');
                    $statusLabel.text('Error').addClass('error');
                }

                $statusLabel.text(result.Data.state);

                $control.removeClass('pending');
            });
        }

        $control.find('.app-pool__trigger').on({
            click: function () {
                run($(this));
            }
        });

    }

    // #region events

    $controls.children().each(function () {
        method($(this));
    });

    $('.app-pool-filter').on({
        submit: (e) => {
            e.preventDefault();
            window.location = `${location.origin}${location.pathname}?filter=${$('#filterFreeText').val().toLowerCase()}`;
        }
    });

    // #endregion

}

if ($('.app-pool-list').length > 0) {
    appPoolControls($('.app-pool-list'));
}