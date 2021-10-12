exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                label: 'Chiamata interna',
                value: '[<i>num. interno</i>]'
            },
            {
                label: 'Chiamata esterna',
                value: '<b>0</b> + [<i>num. esterno</i>]'
            },
            {
                label: 'Passaggio chiamata',
                value: '<b>Trans</b> + [<i>num. interno</i>]'
            },
            {
                label: 'Riprendere chiamata',
                value: '<b>Trans</b>'
            },
            {
                label: 'Passare chiamata',
                value: '<i>Riporre la cornetta</i>'
            },
            {
                label: 'Non disturbare (toggle)',
                value: '<b>DND</b>'
            },
            {
                label: 'Ripetizione ultimo numero',
                value: '<b>Speed</b> + <b>*</b> + <b>Hold/Save</b>'
            },
            {
                label: 'Intercetta chiamata generale',
                value: '<b>*</b> + <b>*</b>'
            },
            {
                label: 'Intercetta chiamata interno noto',
                value: '<b>7</b> + [<i>num. interno</i>]'
            },
            {
                label: 'Cellulari diretti <FontAwesomeIcon icon={faBolt} />',
                value: '<b>Speed</b> + [<i>num. interno</i>]'
            }
        ])
    };
}