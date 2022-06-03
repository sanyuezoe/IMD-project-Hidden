const intro = [
    {
     text: "A study examining newspaper reports during the pandemic identifies nine categories of violence against women: battering, aggression with weapon, psychological violence, homicide, homicide-suicide, sexual violence, stalking, threat or maltreatment and attempted murder.Alcohol abuse, stress, disruption of social and protective networks and a decreased access to protection services are cited as possible factors responsible for the situation.",
    },
    {
        text: "One in four Italian considers violence against women is not violence.\n\n Violence against women is patriarchal violence. As such it not only concerns cis-women but also transgender persons, who have a high risk of experiencing violence in our society.\n\nThough the public often only talks about women, excluding transphobic violence from the issue.",
    },
    {
        text: "We need to talk about patriarchal violence"
    }
]

const introtext = document.getElementById('text');
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const introText = document.querySelector(".intro_text");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  changeText();
})

function changeText(){
  const item =intro[currentItem];
  introtext.textContent = item.text;

}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > intro.length - 1){
    currentItem = 0;
  }
  changeText();
  

});

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = intro.length - 1;
  }
  changeText();

});

