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
            } else if (state === API_STATUSES.Stopped) {
                $control.removeClass('app-pool--running running').addClass('app-pool--stopped stopped');
            }
        }

        const run = ($el) => {

            if ($control.hasClass('pending')) {
                return;
            }

            $control.addClass('pending');

            postData($el.data('api-action')).then((result) => {

                if (result.Status === HTTP_STATUS_CODES.Success) {
                    $control.removeClass('error');

                    updateDisplayClasses(result.Data.state);

                }

                if (result.Status === HTTP_STATUS_CODES.BadRequest) {
                    $control.addClass('error shake-shake-shake');
                }

                $control.removeClass('pending');
            });
        }

        $control.find('.app-pool__trigger').on({
            click: function () {
                run($(this));
            }
        });

    }

    $controls.children().each(function () {
        method($(this));
    });

}

if ($('.app-pool-list').length > 0) {
    appPoolControls($('.app-pool-list'));
}