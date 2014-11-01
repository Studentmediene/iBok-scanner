/**
 * iBok barcode scanner
 */

function IBokScanner() {

    var lCode = [
            '0001101',
            '0011001',
            '0010011',
            '0111101',
            '0100011',
            '0110001',
            '0101111',
            '0111011',
            '0110111',
            '0001011'
        ],
        rCode = lCode.map(function (c) {
            return c.split('').map(function (d) {
                return d == '0' ? '1' : '0';
            }).join('');
        }),
        gCode = rCode.map(function (c) {
            return c.split('').reverse().join('');
        });


    /**
     * Calculates checksume given the first 12 digits of a barcode
     */
    function calculateChecksum(digits) {
        //TODO
        return 0;
    }

    this.scan = function (data) {
        console.log(data);
    };

};
