// =================================================
// ✅ ➊ Paste your model URL
// =================================================
   const URL = "https://teachablemachine.withgoogle.com/models/tMdQ31iE9/";


// =================================================
// ✔️ Initialize the model and webcam
// =================================================
   // ⁉️ Assign variables
   let model, webcam, labelContainer, maxPredictions;
   // ⁉️ Tracks if a window has already been opened
   let hasOpenedWindow = false;
   // ⁉️ Probability threshold (80%) for triggering an action
   const THRESHOLD = 0.8;


   async function init() {
      // =================================================
      // ❌ No need to change
      // =================================================
      // ⁉️ URL + "model.json": Construct the model URL
      // ⁉️ URL + "metadata.json": Construct the metadata URL
      const modelURL = URL + "model.json"; 
      const metadataURL = URL + "metadata.json";

      // ⁉️ Load the model and get the number of prediction classes
      model = await tmImage.load(modelURL, metadataURL); 
      maxPredictions = model.getTotalClasses();

      // =================================================
      // ✅ ➋ new tmImage.Webcam(400, 400, true): 400x400 resolution
      //      🫲 true: mirror the webcam (flipped)
      //      🫱 false: showing the image as it is captured (not be flipped)
      // =================================================
      webcam = new tmImage.Webcam(400, 400, true); 
     
      // =================================================
      // ❌ No need to change
      // =================================================
      // ⁉️ Request access to the webcam
      await webcam.setup(); 
      // ⁉️ Start the webcam stream
      await webcam.play(); 
      // ⁉️ Start the loop function for continuous prediction
      requestAnimationFrame(loop); 

      // =================================================
      // ✔️ Create the webcam and label containers
      // =================================================
      // ⁉️ Append webcam canvas to the container
      $("#webcam-container").append(webcam.canvas); 
      // ⁉️ Select the label container for predictions
      labelContainer = $("#label-container"); 
      // ⁉️ Create a placeholder for each prediction label
      for (let i = 0; i < maxPredictions; i++) {
          labelContainer.append("<div></div>"); 
      }
   }


// =================================================
// ❌ No need to change: continuously updates the webcam feed and runs predictions in real-time
// =================================================
   async function loop() {
      // ⁉️ Update the webcam frame
      webcam.update();
      // ⁉️ Run prediction on the current frame
      await predict();
      // ⁉️ Continue the loop function for real-time updates
      requestAnimationFrame(loop);
   }


// =================================================
// ✔️ Runs the model’s prediction on the current webcam frame
// =================================================
   async function predict() {
      // ⁉️ Get predictions for the current webcam frame
      const prediction = await model.predict(webcam.canvas);
      // ⁉️ Create an array of probabilities from the prediction results
      const probabilities = prediction.map(p => p.probability);

      // ⁉️ Find the highest probability value
      let maxProb = Math.max(...probabilities);
      // ⁉️ Find the index of the highest probability class
      let maxIndex = probabilities.indexOf(maxProb);

      // =================================================
      // ✅ ➌ Apply _____ when a specific model is detected
      // =================================================
      if (maxIndex === 0) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Show a trinket!";
        document.querySelector("#mainText1").textContent = "Grab a trinket from the shelf!";
         document.querySelector("#image").src = "./img/fullshelf.png";
      //   document.body.style.backgroundColor = "#ec94bf";
      } 
      else if (maxIndex === 1) {
         document.querySelector("#mainText1").className = "variable2";
        document.querySelector("#mainText2").textContent = "Sonny Angel"; 
         document.querySelector("#mainText1").innerHTML = "My parents got me this Sonny Angel for Christmas 2024. I wanted <br> the cat series so bad but I couldn't find it anywhere and hadn’t <br> seen any Sonny Angels in ages. I was so excited to open this one <br> because it’s the one I was really hoping I would pull because it looks <br> just like my cat Rex. Although Rex’s nose is pink. But they’re both grey <br> tabby cats. My dad HATES Sonny Angels, though. He calls them 'those <br> naked babies' and when my parents were buying it for me, he was asking <br> if you also have to buy clothes for them. My mom had to explain that no <br> they don’t have clothes and he said 'that’s really weird.' But he'll still buy <br> them for me anyway.";
        document.querySelector("#image").src = "./img/sonnyshelf.png";
      //   document.body.style.backgroundColor = "#f15ea5";
      } 
      else if (maxIndex === 2) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Nun";
        document.querySelector("#image").src = "./img/nunshelf.png";
        document.querySelector("#mainText1").innerHTML = "I got this nun porcelain figurine at my favorite antique store, <br> Miller’s Crossing. I thought she was cute, but I thought it would <br> be kinda weird if I got a nun figurine. But I walked around the <br> entire store thinking about her and when I was walking towards <br> the check out I had to turn around and grab her. I was raised <br> Catholic so I do have an interest in weird religious objects, <br> but wasn’t every cool artsy emo girl also raised Catholic? <br> That makes it chill to me.";
      //   document.body.style.backgroundColor = "#ff008c";
        
      } 
       else if (maxIndex === 3) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Bunny";
         document.querySelector("#image").src = "./img/bunshelf.png";
         document.querySelector("#mainText1").innerHTML = "I picked up this Bunny Jellycat in a children’s store in Venice <br> when I was studying abroad there. When I saw her I knew I <br> had to get her because she was specifically designed, produced, <br> and sold with me in mind idgaf. I LOVE bunnies and she’s holding <br> a cutie little love letter? Well yes! I had already bought a <br> commemorative Jellycat in Venice (a little cake) but I knew I <br> couldn’t pass her up. I’ve actually never seen this particular Jellycat <br> since so I don’t know what’s up with that. Thank god I got it while I could."
      //   document.body.style.backgroundColor = "#00ff15";
      } 
         else if (maxIndex === 4) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Teacup";
         document.querySelector("#image").src = "./img/teashelf.png";
         document.querySelector("#mainText1").innerHTML = "My parents and I love to go antique shopping. I used to hate <br> it as a kid, but now that I have a room to decorate I LOVE going. <br> PA, West Virginia, and Ohio have the best antique stores and I <br> stand by that. We went to a bunch of different ones shopping <br> for my apartment and I found this teacup. It matches the green <br> and pink of my room perfectly. I think teacups are so cute and I <br> love all the different patterns. I've never really been a coffee <br> person but I love all kinds of tea, except hibiscus. Gross. I have a <br> little teacup charm I also got at an antique store in West Virginia <br> that I wear on my charm necklace."
      //   document.body.style.backgroundColor = "#00ff15";
      } 

      // =================================================
      // ✔️ Display prediction results on the screen
      // =================================================
      $("#label-container").children().each((index, element) => {
          $(element).text(prediction[index].className + ": " + prediction[index].probability.toFixed(2));
      });
     
      // =================================================
   }

// =================================================
// ❌ No need to change: automatically run init() after the page loads
// =================================================
   $(document).ready(init);

   