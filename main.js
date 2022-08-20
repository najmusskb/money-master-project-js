document.getElementById('calculate-button').addEventListener('click', function () {



    const GetMyIncomeInput = document.getElementById('my-income');
    const GetMyIncomeInputString = GetMyIncomeInput.value;
    const PreviousAccountBalance = parseInt(GetMyIncomeInputString);
    // Get The Value to income input  (PreviousAccountBalance 20 )
    // console.log(PreviousAccountBalance);





    //  get the value to Food input (PreviousFoodInput)
    const GetFoodInput = document.getElementById('food-input');
    const GetFoodInputString = GetFoodInput.value;
    const PreviousFoodInput = parseInt(GetFoodInputString);
    // console.log(PreviousFoodInput)




    //  get the value to Rent input (PreviousGetRentinput)
    const GetRentInput = document.getElementById('rent-input');
    const GetRentInputString = GetRentInput.value;
    const PreviousGetRentinput = parseInt(GetRentInputString);
    // console.log(PreviousGetRentinput)


    //  get the value to colth input (PreviousGetClothInput)
    const Getclothesinput = document.getElementById('clothes-input');
    const GetclothString = Getclothesinput.value;
    const PreviousGetClothInput = parseInt(GetclothString);
    // console.log(PreviousGetClothInput);




    // get  TheTotalValurOFFoodRentCloth  (TheTotalValurOFFoodRentCloth)
    const TheTotalValurOFFoodRentCloth = PreviousFoodInput + PreviousGetRentinput + PreviousGetClothInput;
    // console.log(TheTotalValurOFFoodRentCloth);




    // Get the Total Expenses number (TheTotalValurOFFoodRentCloth)
    const GetTheValurOFTotalExpenses = document.getElementById('Tota-lExpenses');
    const GetTheValurOFTotalExpensesString = GetTheValurOFTotalExpenses.innerText;
    const PreviousGetTheValurOFTotalExpensesString = parseInt(GetTheValurOFTotalExpensesString);
    // console.log(PreviousGetTheValurOFTotalExpensesString);
    GetTheValurOFTotalExpenses.innerText = TheTotalValurOFFoodRentCloth;







    // get The baki Balance (Previousbakibalanace)
    const bakiBalance = document.getElementById('baki-balance');
    const bakibalancestring = bakiBalance.innerText;
    const Previousbakibalanace = parseInt(bakibalancestring);
    // console.log(Previousbakibalanace)

    //  baki balance holo (bakibalanceTotal)
    const bakibalanceTotal = PreviousAccountBalance - TheTotalValurOFFoodRentCloth;
    bakiBalance.innerText = bakibalanceTotal;





    // -----------------------------------------------------------------------------------
















    document.getElementById('save-button').addEventListener('click', function () {


        const inputForSave = document.getElementById("Save-input");
        // console.log(inputForSave)
        const inputForSavegetvalueString = inputForSave.value;
        const inputForSaveNumber = parseInt(inputForSavegetvalueString);
        // console.log(inputForSaveNumber)




        const saving = bakibalanceTotal - inputForSaveNumber;


        // console.log(saving);

        const setvalue = document.getElementById('zerosaving-input');
        const setvaluestring = setvalue.innerText;
        const setvaluenumber = parseInt(setvaluestring);
        setvalue.innerText = saving;






        const myfinalearn = bakibalanceTotal - saving;

        const myearn = document.getElementById('myTkearn-input');
        const stringmyearn = myearn.innerText;
        const previousmyearn = parseInt(stringmyearn);

        myearn.innerText = myfinalearn;






    })












})














