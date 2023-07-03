

// api invoke recycle action
const appPoolRecyclerControls = ($controls) => {

    const url = `${window.location.origin}/api/apppoolrecyclerapi`;

    const method = ($control) => {

        console.log($control);

        const name = $control.data('app-pool-name');

        async function postData(data = {}) {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(name)
            });
            return response.json();
        }

        const run = ($el) => {

            if ($el.hasClass('pending')) {
                return;
            }

            $el.addClass('pending');

            postData().then((response) => {
                console.log("oh oh oh ", response);
                $el.removeClass('pending');
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
    appPoolRecyclerControls($('.app-pool-list'));
}