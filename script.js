 function delayPromise(value, time) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(value);
        }, time);
      });
    }

    // Function to handle the button click event
    document.getElementById("btn").addEventListener("click", () => {
      const inputNumber = document.getElementById("ip").value;

      // Start promise chain
      delayPromise(inputNumber, 2000)
        .then(number => {
          document.getElementById("output").innerText = `Result: ${number}`;
          return delayPromise(number * 2, 1000);
        })
        .then(number => {
          document.getElementById("output").innerText = `Result: ${number}`;
          return delayPromise(number - 3, 1000);
        })
        .then(number => {
          document.getElementById("output").innerText = `Result: ${number}`;
          return delayPromise(number / 2, 1000);
        })
        .then(number => {
          document.getElementById("output").innerText = `Result: ${number}`;
          return delayPromise(number + 10, 1000);
        })
        .then(finalResult => {
          document.getElementById("output").innerText = `Final Result: ${finalResult}`;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
