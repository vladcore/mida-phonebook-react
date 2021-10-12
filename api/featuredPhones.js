exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                label: 'Ufficio',
                phoneNumber: '035240591'
            },
            {
                label: 'MTK',
                phoneNumber: '035215892'
            },
            {
                label: 'Reperibilità MTK',
                phoneNumber: '3483935085'
            },
            {
                label: 'Reperibilità IT',
                phoneNumber: '3401194348'
            }
        ])
    };
}