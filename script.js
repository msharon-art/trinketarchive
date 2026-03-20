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
         document.querySelector("#mainText1").innerHTML = "My parents got me this Sonny Angel for Christmas <br> 2024. I wanted the cat series so bad but I <br> couldn't find it anywhere and hadn’t seen any <br> Sonny Angels in ages. I was so excited to open this <br> one because it’s the one I was really hoping I <br> would pull because it looks just like my cat Rex. <br> Although Rex’s nose is pink. But they’re both grey <br> tabby cats. My dad HATES Sonny Angels, though. He <br> calls them 'those naked babies' and when my parents <br> were buying it for me, he was asking if you also have <br> to buy clothes for them. My mom had to explain that <br> no they don’t have clothes and he said 'that’s <br> weird.' But he'll still buy them for me anyway.";
        document.querySelector("#image").src = "./img/sonnyshelf.png";
      //   document.body.style.backgroundColor = "#f15ea5";
      } 
      else if (maxIndex === 2) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Nun";
        document.querySelector("#image").src = "./img/nunshelf.png";
        document.querySelector("#mainText1").innerHTML = "I got this nun porcelain figurine at my favorite <br> antique store, Miller’s Crossing. I thought she <br> was cute, but I thought it would be kinda <br> weird if I got a nun figurine. But I walked around the <br> entire store thinking about her and when I was <br> walking towards the check out I had to turn around <br> and grab her. I was raised Catholic so I do have an <br> interest in weird religious objects, but wasn’t <br> every cool artsy emo girl also raised Catholic? <br> That makes it chill to me.";
      //   document.body.style.backgroundColor = "#ff008c";
        
      } 
       else if (maxIndex === 3) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Bunny";
         document.querySelector("#image").src = "./img/bunshelf.png";
         document.querySelector("#mainText1").innerHTML = "I picked up this Bunny Jellycat in a children’s <br> store in Venice when I was studying abroad there. <br> When I saw her I knew I had to get her because <br> she was specifically designed, produced, and sold <br> with me in mind idgaf. I LOVE bunnies and <br> she’s holding a cutie little love letter? Well yes! <br> I had already bought a commemorative Jellycat <br> in Venice (a little cake) but I knew I couldn’t pass <br> her up. I’ve actually never seen this particular <br> Jellycat since so I don’t know what’s up with <br> that. Thank god I got it while I could."
      //   document.body.style.backgroundColor = "#00ff15";
      } 
         else if (maxIndex === 4) {
      //   document.querySelector("#mainText1").className = "variable1";
        document.querySelector("#mainText2").textContent = "Teacup";
         document.querySelector("#image").src = "./img/teashelf.png";
         document.querySelector("#mainText1").innerHTML = "My parents and I love to go antique shopping. <br> I used to hate it as a kid, but now that I have <br> a room to decorate I LOVE going. PA, West Virginia, <br> and Ohio have the best antique stores and I stand <br> by that. We went to a bunch of different ones <br> shopping for my apartment and I found this teacup. <br> It matches the green and pink of my room perfectly. <br> I think teacups are so cute and I love all the <br> different patterns. I've never really been a coffee <br> person but I love all kinds of tea, except hibiscus. <br> Gross. I have a little teacup charm I also got at <br> an antique store in West Virginia that I wear on <br> my charm necklace."
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

   