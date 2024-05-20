//Sum of incomes from different sources.
let total = parseInt(document.getElementById("inp1").value || 0) +
    parseInt(document.getElementById("house_id").value || 0) +
    parseInt(document.getElementById("cap_inp").value || 0) +
    parseInt(document.getElementById("income_other_sources").value || 0);



//for new or old regime deduction options show or not show
let regime = document.getElementById("Tax_Regime");                         //to change the regime
let regime_old = document.querySelectorAll(".regime_old");

regime.addEventListener("change", function () {    //NOTE: event listner should be on select tag not on options.
    if (regime.value == "New") {                              //can also use this.value in place of regime.value
        for (let i = 0; i < regime_old.length; i++) {
            regime_old[i].style.display = "none";
        }
        // console.log("new");
    }
    else {
        for (let i = 0; i < regime_old.length; i++) {
            regime_old[i].style.display = "block";            //for loop is required as this line needs to change the style of each element saparately.
        }
        // console.log("old");
    }
});
//end of new or old regime deduction options show or not show


// to show or hide details
let buttons = document.querySelectorAll(".button");
let opens = document.querySelectorAll(".flex");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (opens[i].style.display == "block") {
            opens[i].style.display = "none";
            buttons[i].innerHTML = "Show Details"
        }
        else {
            opens[i].style.display = "block";
            buttons[i].innerHTML = "Hide Details"
        }
    })
};
// //on key press
// function onKeyPress(event){
//     return event.charCode >= 48 && event.charCode <= 57;
// }


//input adding of housing property
function income_house_property() {
    let a = parseInt(document.getElementById("house_a_id").value || 0);
    let b_1 = parseInt(document.getElementById("house_b_1_id").value || 0);
    let b_2 = parseInt(document.getElementById("house_b_2_id").value || 0);
    let b_3 = parseInt(document.getElementById("house_b_3_id").value || 0);
    // let b_4 = parseInt(document.getElementById("house_b_4_id").value || 0);
    let b_5 = parseInt(document.getElementById("house_b_5_id").value || 0);
    let temp = b_1 - b_2 - b_3;
    let x = Math.floor((0.3) * temp);
    document.getElementById("house_b_4_id").value = x;
    document.getElementById("house_id").value = -a + temp - x - b_5;

    if (regime.value == "New") {
        if (document.getElementById("house_id").value[0] != '-') { }
        else {
            document.getElementById("house_id").value = "0";
        }
    }
    else {
        if (parseInt(document.getElementById("house_id").value) >= -200000) { }
        else {
            document.getElementById("house_id").value = "-200000";
        }
    }
}


//input adding of capital gains----
function short_term_capital_normal() {
    document.getElementById("cap_inp_short_normal_total").value =
        parseInt(document.getElementById("cap_inp_short_normal_1").value || 0) +
        parseInt(document.getElementById("cap_inp_short_normal_2").value || 0) +
        parseInt(document.getElementById("cap_inp_short_normal_3").value || 0) +
        parseInt(document.getElementById("cap_inp_short_normal_4").value || 0) +
        parseInt(document.getElementById("cap_inp_short_normal_5").value || 0);
    capital_gains();
}
function short_term_capital_15pct() {
    document.getElementById("cap_inp_short_15%_total").value =
        parseInt(document.getElementById("cap_inp_short_15%_1").value || 0) +
        parseInt(document.getElementById("cap_inp_short_15%_2").value || 0) +
        parseInt(document.getElementById("cap_inp_short_15%_3").value || 0) +
        parseInt(document.getElementById("cap_inp_short_15%_4").value || 0) +
        parseInt(document.getElementById("cap_inp_short_15%_5").value || 0);
    capital_gains();
}
function long_term_capital_20pct() {
    document.getElementById("cap_inp_long_20%_total").value =
        parseInt(document.getElementById("cap_inp_long_20%_1").value || 0) +
        parseInt(document.getElementById("cap_inp_long_20%_2").value || 0) +
        parseInt(document.getElementById("cap_inp_long_20%_3").value || 0) +
        parseInt(document.getElementById("cap_inp_long_20%_4").value || 0) +
        parseInt(document.getElementById("cap_inp_long_20%_5").value || 0);
    capital_gains();
}
function long_term_capital_10pct() {
    document.getElementById("cap_inp_long_10%_total").value =
        parseInt(document.getElementById("cap_inp_long_10%_1").value || 0) +
        parseInt(document.getElementById("cap_inp_long_10%_2").value || 0) +
        parseInt(document.getElementById("cap_inp_long_10%_3").value || 0) +
        parseInt(document.getElementById("cap_inp_long_10%_4").value || 0) +
        parseInt(document.getElementById("cap_inp_long_10%_5").value || 0);
    capital_gains();
}
function long_term_capital_112A_10pct() {
    document.getElementById("cap_inp_long_112A_10%_total").value =
        parseInt(document.getElementById("cap_inp_long_112A_10%_1").value || 0) +
        parseInt(document.getElementById("cap_inp_long_112A_10%_2").value || 0) +
        parseInt(document.getElementById("cap_inp_long_112A_10%_3").value || 0) +
        parseInt(document.getElementById("cap_inp_long_112A_10%_4").value || 0) +
        parseInt(document.getElementById("cap_inp_long_112A_10%_5").value || 0);
    capital_gains();
}
function capital_gains() {
    document.getElementById("cap_inp").value =
        parseInt(document.getElementById("cap_inp_short_normal_total").value || 0) +
        parseInt(document.getElementById("cap_inp_short_15%_total").value || 0) +
        parseInt(document.getElementById("cap_inp_long_20%_total").value || 0) +
        parseInt(document.getElementById("cap_inp_long_10%_total").value || 0) +
        parseInt(document.getElementById("cap_inp_long_112A_10%_total").value || 0);
}


//input adding of income from other sources
function other_sources() {
    document.getElementById("income_other_sources").value = parseInt(document.getElementById("interest1").value || 0) +
        parseInt(document.getElementById("commission1").value || 0) +
        parseInt(document.getElementById("lottery1").value || 0);
}


//total deductions under some sections.
function total_deduction() {

    //80C + 80CCC + 80CCD(1)
    let a = parseInt(document.getElementById("80C").value || 0) + parseInt(document.getElementById("80CCC").value || 0) + parseInt(document.getElementById("80CCD(1)").value || 0);
    if (a <= 150000) { }
    else {
        a = 150000;
    }

    //80CCD(1B)
    let b = parseInt(document.getElementById("80CCD(1B)").value || 0);
    if (b <= 50000) { }
    else {
        b = 50000;
    }

    //80CCD(2)
    let c = parseInt(document.getElementById("80CCD(2)").value || 0);
    let salary = parseInt(document.getElementById("inp1").value || 0);          //salary
    let Employers = document.getElementById("Employer");                       //Employer
    if (Employers.value == "PSU" || Employers.value == "Others") {
        let x = Math.floor((0.1) * (salary));
        if (c <= x) { }
        else {
            c = x;
        }
    }
    else {
        let x = Math.floor((0.14) * (salary));
        if (c <= x) { }
        else {
            c = x;
        }
    }

    //80CCH
    let d = parseInt(document.getElementById("80CCH").value || 0);

    //80D
    let e = parseInt(document.getElementById("80D").value || 0);
    if (e <= 100000) { }
    else {
        e = 100000;
    }

    //80DD
    let f;
    let DD_less = document.getElementById("80DD_less");
    let DD_more = document.getElementById("80DD_more");
    if (DD_less.checked && DD_more.checked) {
        f = 125000;
    }
    else if (DD_less.checked) {
        f = 75000;
    }
    else {
        f = 0;
    }
    document.getElementById("80DD").value = f;

    //80DDB
    let g = parseInt(document.getElementById("80DDB").value || 0);
    if (document.getElementById("age").value != "<60") {
        if (g <= 100000) { }
        else {
            g = 100000;
        }
    }
    else {
        if (g <= 40000) { }
        else {
            g = 40000;
        }
    }

    //80E
    let h = parseInt(document.getElementById("80E").value || 0);

    //80EE  and 80EEA
    let i = parseInt(document.getElementById("80EE").value || 0);
    let j = parseInt(document.getElementById("80EEA").value || 0);
    if (j != 0) {
        i = 0;
        if (j <= 150000) { }
        else {
            j = 150000;
        }
    }
    else {
        if (i <= 50000) { }
        else {
            i = 50000;
        }
    }

    //80EEB
    let k = parseInt(document.getElementById("80EEB").value || 0);
    if (k <= 150000) { }
    else {
        k = 150000;
    }

    //80TTA
    let l = parseInt(document.getElementById("80TTA").value || 0);
    if (document.getElementById("age").value == "<60") {
        if (l <= 10000) { }
        else {
            l = 10000;
        }
    }
    else {
        l = 0;
    }

    //80TTB
    let m = parseInt(document.getElementById("80TTB").value || 0);
    if (document.getElementById("age").value != "<60") {
        if (m <= 50000) { }
        else {
            m = 50000;
        }
    }
    else {
        m = 0;
    }

    //80U
    let n;
    let U_less = document.getElementById("80U_less");
    let U_more = document.getElementById("80U_more");
    if (U_less.checked && U_more.checked) {
        n = 125000;
    }
    else if (U_less.checked) {
        n = 75000;
    }
    else {
        n = 0;
    }
    document.getElementById("80U").value = n;

    //Any_other_deductions
    let o = parseInt(document.getElementById("Any_other_deductions").value || 0);

    document.getElementById("toal_deductions").value =
        a +         //80C,80CCC,80CCD(1)
        b +         //80CCD(1B)
        c +         //80CCD(2)
        d +         //80CCH
        e +         //80D
        f +         //80DD
        g +         //80DDB
        h +         //80E
        i +         //80EE
        j +         //80EEA
        k +         //80EEB
        l +         //80TTA
        m +         //80TTB
        n +         //80U
        o;          //OTHER DEDUCTIONS

    if (total != 0) {
        if (parseInt(document.getElementById("toal_deductions").value || 0) <= total) { }
        else {
            document.getElementById("toal_deductions").value = total;
        }
    }
}


//tax from income area
function tax_calc() {

    //tax for STCGs@15%
    let cap_inp_short_15pct_total = parseInt(document.getElementById("cap_inp_short_15%_total").value || 0);
    document.getElementById("tax_STCGs@15%_1").value = cap_inp_short_15pct_total;
    document.getElementById("tax_STCGs@15%_2").value = Math.round((0.15) * cap_inp_short_15pct_total);

    //tax for LTCGs@20%
    let cap_inp_long_20pct_total = parseInt(document.getElementById("cap_inp_long_20%_total").value || 0);
    document.getElementById("tax_LTCGs@20%_1").value = cap_inp_long_20pct_total;
    document.getElementById("tax_LTCGs@20%_2").value = Math.round((0.20) * cap_inp_long_20pct_total);

    //tax for LTCGs@10%
    let cap_inp_long_10pct_total = parseInt(document.getElementById("cap_inp_long_10%_total").value || 0);
    document.getElementById("tax_LTCGs@10%_1").value = cap_inp_long_10pct_total;
    document.getElementById("tax_LTCGs@10%_2").value = Math.round((0.10) * cap_inp_long_10pct_total);

    //tax for LTCGs_112A@10%
    let cap_inp_long_112A_10pct_total = parseInt(document.getElementById("cap_inp_long_112A_10%_total").value || 0);
    document.getElementById("tax_LTCGs_112A@10%_1").value = cap_inp_long_112A_10pct_total;
    if (cap_inp_long_112A_10pct_total <= 100000) {
        document.getElementById("tax_LTCGs_112A@10%_2").value = "0";
    }
    else {
        document.getElementById("tax_LTCGs_112A@10%_2").value = Math.round((0.10) * (cap_inp_long_112A_10pct_total - 100000));
    }

    //tax for Lottery
    let lottery_total = parseInt(document.getElementById("lottery1").value || 0);
    document.getElementById("tax_Lottery_1").value = lottery_total;
    document.getElementById("tax_Lottery_2").value = Math.round((0.30) * lottery_total);

    //net taxable income
    document.getElementById("netTaxableIncome").value =
        parseInt(document.getElementById("inp1").value || 0) +
        parseInt(document.getElementById("house_id").value || 0) +
        parseInt(document.getElementById("cap_inp").value || 0) +
        parseInt(document.getElementById("income_other_sources").value || 0) -
        parseInt(document.getElementById("toal_deductions").value || 0);

    //Income Liable to Tax at Normal Rate
    let range_For_Tax_Income_Liable =
        document.getElementById("netTaxableIncome").value -
        (cap_inp_short_15pct_total +
            cap_inp_long_20pct_total +
            cap_inp_long_10pct_total +
            cap_inp_long_112A_10pct_total +
            lottery_total
        );
    document.getElementById("tax_Income_Liable_1").value = range_For_Tax_Income_Liable;
    if (regime.value == "New") {
        newTaxSlab(range_For_Tax_Income_Liable);
    }
    else {
        oldTaxSlab(range_For_Tax_Income_Liable);
    }
}


//tax slab for new regime
function newTaxSlab(range_For_Tax_Income_Liable) {
    if (range_For_Tax_Income_Liable <= 700000) {
        document.getElementById("tax_Income_Liable_2").value = "0";
    }
    else {
        if (range_For_Tax_Income_Liable > 600000 && range_For_Tax_Income_Liable <= 900000) {
            let test = (Math.round((0.10) * (range_For_Tax_Income_Liable - 600000))) + 15000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
        else if (range_For_Tax_Income_Liable > 900000 && range_For_Tax_Income_Liable <= 1200000) {
            let test = (Math.round((0.15) * (range_For_Tax_Income_Liable - 900000))) + 45000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
        else if (range_For_Tax_Income_Liable > 1200000 && range_For_Tax_Income_Liable <= 1500000) {
            let test = (Math.round((0.20) * (range_For_Tax_Income_Liable - 1200000))) + 90000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
        else {
            let test = (Math.round((0.30) * (range_For_Tax_Income_Liable - 1500000))) + 150000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
    }
}


//tax slab for old regime
function oldTaxSlab(range_For_Tax_Income_Liable) {
    if (range_For_Tax_Income_Liable <= 500000) {
        document.getElementById("tax_Income_Liable_2").value = "0";
    }
    else if (document.getElementById("age").value == "<60") {
        if (range_For_Tax_Income_Liable > 500000 && range_For_Tax_Income_Liable <= 1000000) {
            let test = (Math.round((0.20) * (range_For_Tax_Income_Liable - 500000))) + 12500;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
        else {
            let test = (Math.round((0.30) * (range_For_Tax_Income_Liable - 1000000))) + 112500;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
    }
    else if (document.getElementById("age").value == "60include-80exclude") {
        if (range_For_Tax_Income_Liable > 500000 && range_For_Tax_Income_Liable <= 1000000) {
            let test = (Math.round((0.20) * (range_For_Tax_Income_Liable - 500000))) + 10000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
        else {
            let test = (Math.round((0.30) * (range_For_Tax_Income_Liable - 1000000))) + 110000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
    }
    else if (document.getElementById("age").value == ">=80") {
        if (range_For_Tax_Income_Liable > 500000 && range_For_Tax_Income_Liable <= 1000000) {
            let test = (Math.round((0.20) * (range_For_Tax_Income_Liable - 500000)));
            document.getElementById("tax_Income_Liable_2").value = test;
        }
        else {
            let test = (Math.round((0.30) * (range_For_Tax_Income_Liable - 1000000))) + 100000;
            document.getElementById("tax_Income_Liable_2").value = test;
        }
    }
}
