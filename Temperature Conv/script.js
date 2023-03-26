function convert() {
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    
    if (unit === "celsius") {
      let fahrenheit = (temperature * 1.8) + 32;
      document.getElementById("result").innerHTML = temperature + " Celsius = " + fahrenheit + " Fahrenheit";
    } else {
      let celsius = (temperature - 32) / 1.8;
      document.getElementById("result").innerHTML = temperature + " Fahrenheit = " + celsius + " Celsius";
    }
  
    if (temperature > 30) {
      document.body.classList.add("high-temperature");
    } else {
      document.body.classList.remove("high-temperature");
    }
     if (temperature <30)
    {
        document.body.classList.add("low-temperature");
    }
    else
    {
        document.body.classList.remove("low-temperature");
    }
    
  }
  