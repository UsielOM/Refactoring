class FizzbuzzService {

    static applyValidationInExplorer(explorer) {

        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return console.log(explorer);
        }
        if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return console.log(explorer);

        }
        if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return console.log(explorer);
        } else {
            explorer.trick = explorer.score;
            return console.log(explorer);
        }




    }

    static applyValidationInNumber(number) {

        if (number % 3 === 0 && number % 5 === 0) {
            return "FIZZBUZZ";
        } else if (number % 3 === 0) {
            return "FIZZ";
        } else if (number % 5 === 0) {
            return "BUZZ";
        } else {
            return number;
        }
    }

}

module.exports = FizzbuzzService;