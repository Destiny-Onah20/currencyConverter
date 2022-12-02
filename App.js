let Value = document.getElementById("value");
let FromCurrency = document.getElementById("From_currency");
let toCurrency = document.querySelector("#To_currency");
let Button = document.getElementById("Convert");
const Result = document.getElementById("Result")

// currencies rates

// dollar rates
let eurRate = 1.03;
let ngnRate = 434.28;
let cadRate = 1.38;
let zarRate = 18.19;
let gbpRate = 0.91;
let inrRate = 82.28;
//euro rates
let usdRate = 0.97;
let ngnRate1 = 421.70;
let cadRate1 = 1.32;
let zarRate1 = 17.63;
let gbpRate1 = 0.88;
let inrRate1 = 79.91; 
//naira rates
let usdRate2 = 0.0023;
let eurRate2 = 0.0024;
let cadRate2 = 0.0032;
let zarRate2 = 0.042;
let gbpRate2 = 0.0021;
let inrRate2 = 0.19;
//canadian dollar rates
let usdRate3 = 0.72;
let eurRate3 = 0.75;
let ngnRate3 = 314.83;
let zarRate3 = 13.18;
let gbpRate3 = 0.66;
let inrRate3 = 59.64;
//South african rand
let usdRate4 = 0.055;
let eurRate4 = 0.057;
let ngnRate4 = 23.89;
let cadRate4 = 0.076;
let gbpRate4 = 0.050;
let inrRate4 = 4.53;
// Great british pounds
let usdRate5 = 1.10;
let eurRate5 = 1.14;
let ngnRate5 = 478.53;
let cadRate5 = 1.52;
let inrRate5 = 90.78;
let zarRate5 = 20.06;
//indian Rupee
let usdRate6 = 0.0121;
let eurRate6 = 0.0125;
let cadRate6 = 0.0167;
let ngnRate6 = 5.27;
let zarRate6 = 0.22;
let gbpRate6 = 0.011;


Button.addEventListener(("click"), (e) => {
    e.preventDefault()

    if(FromCurrency.value === "usd" && toCurrency.value === "usd1"){
        Value = Value.value * 1;
        Result.innerHTML = Value 
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "usd" && toCurrency.value === "eur1"){
        Value = Value.value * eurRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "usd" && toCurrency.value === "ngn1"){
        Value = Value.value * ngnRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "usd" && toCurrency.value === "cad1"){
        Value = Value.value * cadRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "usd" && toCurrency.value === "gbp1"){
        Value = Value.value * gbpRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "usd" && toCurrency.value === "inr1"){
        Value = Value.value * inrRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "usd" && toCurrency.value === "ZAR1"){
        Value = Value.value * zarRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
    if(FromCurrency.value === "eur" && toCurrency.value === "eur1"){
        Value = Value.value * 1;
        Result.innerHTML = Value 
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "eur" && toCurrency.value === "usd1"){
        Value = Value.value * usdRate;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "eur" && toCurrency.value === "ngn1"){
        Value = Value.value * ngnRate1;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "eur" && toCurrency.value === "cad1"){
        Value = Value.value * cadRate1;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "eur" && toCurrency.value === "gbp1"){
        Value = Value.value * gbpRate1;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "eur" && toCurrency.value === "inr1"){
        Value = Value.value * inrRate1;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "eur" && toCurrency.value === "ZAR1"){
        Value = Value.value * zarRate1;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
    if(FromCurrency.value === "ngn" && toCurrency.value === "ngn1"){
        Value = Value.value * 1;
        Result.innerHTML = Value 
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "ngn" && toCurrency.value === "eur1"){
        Value = Value.value * eurRate2;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "ngn" && toCurrency.value === "usd1"){
        Value = Value.value * usdRate2;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ngn" && toCurrency.value === "cad1"){
        Value = Value.value * cadRate2;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ngn" && toCurrency.value === "gbp1"){
        Value = Value.value * gbpRate2;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ngn" && toCurrency.value === "inr1"){
        Value = Value.value * inrRate2;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ngn" && toCurrency.value === "ZAR1"){
        Value = Value.value * zarRate2;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
    if(FromCurrency.value === "cad" && toCurrency.value === "cad1"){
        Value = Value.value * 1;
        Result.innerHTML = Value 
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "cad" && toCurrency.value === "eur1"){
        Value = Value.value * eurRate3;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "cad" && toCurrency.value === "ngn1"){
        Value = Value.value * ngnRate3;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "cad" && toCurrency.value === "usd1"){
        Value = Value.value * usdRate3;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "cad" && toCurrency.value === "gbp1"){
        Value = Value.value * gbpRate3;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "cad" && toCurrency.value === "inr1"){
        Value = Value.value * inrRate3;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "cad" && toCurrency.value === "ZAR1"){
        Value = Value.value * zarRate3;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
    if(FromCurrency.value === "ZAR" && toCurrency.value === "ZAR1"){
        Value = Value.value * 1;
        Result.innerHTML = Value 
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "ZAR" && toCurrency.value === "eur1"){
        Value = Value.value * eurRate4;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "ZAR" && toCurrency.value === "ngn1"){
        Value = Value.value * ngnRate4;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ZAR" && toCurrency.value === "cad1"){
        Value = Value.value * cadRate4;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ZAR" && toCurrency.value === "gbp1"){
        Value = Value.value * gbpRate4;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ZAR" && toCurrency.value === "inr1"){
        Value = Value.value * inrRate4;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "ZAR" && toCurrency.value === "usd1"){
        Value = Value.value * usdRate4;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
    if(FromCurrency.value === "gbp" && toCurrency.value === "gbp1"){
        Value = Value.value * 1
        Result.innerHTML = Value
        Result.style.display = "block"
    }else if(FromCurrency.value === "gbp" && toCurrency.value === "usd1"){
        Value = Value.value * usdRate5
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "gbp" && toCurrency.value === "eur1"){
        Value = Value.value * eurRate5;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "gbp" && toCurrency.value === "ngn1"){
        Value = Value.value * ngnRate5;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "gbp" && toCurrency.value === "cad1"){
        Value = Value.value * cadRate5;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "gbp" && toCurrency.value === "inr1"){
        Value = Value.value * inrRate5;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "gbp" && toCurrency.value === "ZAR1"){
        Value = Value.value * zarRate5;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
    if(FromCurrency.value === "inr" && toCurrency.value === "inr1"){
        Value = Value.value * 1;
        Result.innerHTML = Value 
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "inr" && toCurrency.value === "eur1"){
        Value = Value.value * eurRate6;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if(FromCurrency.value === "inr" && toCurrency.value === "ngn1"){
        Value = Value.value * ngnRate6;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "inr" && toCurrency.value === "usd1"){
        Value = Value.value * usdRate6;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "inr" && toCurrency.value === "gbp1"){
        Value = Value.value * gbpRate6;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "inr" && toCurrency.value === "cad1"){
        Value = Value.value * cadRate6;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    }else if (FromCurrency.value === "inr" && toCurrency.value === "ZAR1"){
        Value = Value.value * zarRate6;
        Result.innerHTML = Value
        Result.style.display = "block"
        console.log(Value)
    };
});
