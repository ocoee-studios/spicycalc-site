"use strict";
function initializeSpicyCalc(){
"use strict";
const features = {
 calculate:{symbol:"÷",kicker:"CALCULATE",title:"Peptide calculations, organized.",copy:"Explore peptide reconstitution, concentration and volume arithmetic, multi-peptide blends, and vial quantity estimates using the values you enter.",foot:"Educational arithmetic only. Independently verify inputs, units, and results."},
 track:{symbol:"≈",kicker:"TRACK",title:"Small entries. Less scattered.",copy:"Keep water, nutrition, fitness, and body-metric entries together. Come back to a familiar place for the daily details you choose to record.",foot:"General wellness records. Tracking tools do not diagnose or treat health conditions."},
 organize:{symbol:"+",kicker:"ORGANIZE",title:"A home for your personal records.",copy:"Keep your calendar records and saved configurations close to the calculation tools you use, so you can return to your own information.",foot:"Personal records are stored on your device. Review the app privacy policy for details."}
};
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectFeature(tab){const feature=features[tab.dataset.feature];tabs.forEach(item=>{const selected=item===tab;item.setAttribute("aria-selected",String(selected));item.tabIndex=selected?0:-1;});document.getElementById("feature-panel").setAttribute("aria-labelledby",tab.id);const screenshots={calculate:["/assets/screenshot-calculate.webp","SpicyCalc Calculate screen"],track:["/assets/screenshot-fitness.webp","SpicyCalc fitness tracking screen"],organize:["/assets/screenshot-organize.webp","SpicyCalc More screen with search, notes, research, exports, and privacy tools"]};const image=document.getElementById("panel-image");image.src=screenshots[tab.dataset.feature][0];image.alt=screenshots[tab.dataset.feature][1];for(const key of ["symbol","kicker","title","copy","foot"])document.getElementById(`panel-${key}`).textContent=feature[key];}
tabs.forEach((tab,index)=>{tab.addEventListener("click",()=>selectFeature(tab));tab.addEventListener("keydown",event=>{let next;if(event.key==="ArrowRight"||event.key==="ArrowDown")next=(index+1)%tabs.length;if(event.key==="ArrowLeft"||event.key==="ArrowUp")next=(index+tabs.length-1)%tabs.length;if(event.key==="Home")next=0;if(event.key==="End")next=tabs.length-1;if(next!==undefined){event.preventDefault();selectFeature(tabs[next]);tabs[next].focus();}});});
document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener("click",event=>{const target=document.getElementById(link.getAttribute("href").slice(1));if(!target)return;event.preventDefault();target.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});if(!target.hasAttribute("tabindex"))target.setAttribute("tabindex","-1");target.focus({preventScroll:true});});});


// Native dialog keeps enlarged screenshots keyboard-accessible and out of the page tab order when closed.
const screenshotDialog=document.getElementById("screenshot-dialog");
const screenshotFull=document.getElementById("screenshot-full");
const screenshotCanvas=document.getElementById("screenshot-canvas");
const screenshotZoom=document.getElementById("screenshot-zoom");
let screenshotTrigger=null;
function openScreenshot(image,trigger){
 if(!image)return;
 screenshotTrigger=trigger;
 screenshotFull.src=image.src;screenshotFull.alt=image.alt;
 screenshotCanvas.classList.remove("is-zoomed");screenshotZoom.setAttribute("aria-pressed","false");screenshotZoom.textContent="Enlarge";
 screenshotDialog.showModal();screenshotDialog.scrollTop=0;screenshotCanvas.scrollLeft=0;
}
document.querySelectorAll(".screenshot-open").forEach(button=>button.addEventListener("click",()=>openScreenshot(button.querySelector("img"),button)));
document.querySelectorAll(".view-screen-button").forEach(button=>button.addEventListener("click",()=>openScreenshot(button.parentElement.querySelector("img"),button)));
document.getElementById("screenshot-close").addEventListener("click",()=>screenshotDialog.close());
screenshotZoom.addEventListener("click",()=>{const zoomed=screenshotCanvas.classList.toggle("is-zoomed");screenshotZoom.setAttribute("aria-pressed",String(zoomed));screenshotZoom.textContent=zoomed?"Fit width":"Enlarge";});
screenshotDialog.addEventListener("close",()=>{if(screenshotTrigger)screenshotTrigger.focus({preventScroll:true});});
screenshotDialog.addEventListener("click",event=>{if(event.target===screenshotDialog){const rect=screenshotDialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)screenshotDialog.close();}});

}
if(document.readyState === "loading"){
 document.addEventListener("DOMContentLoaded",initializeSpicyCalc,{once:true});
}else{initializeSpicyCalc();}
