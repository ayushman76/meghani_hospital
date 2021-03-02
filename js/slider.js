var body = document.getElementById('body');
//create nav Tag under Body
var section = document.createElement('section');

body.appendChild(section);

var slider = function slid(){
	var jason = [{
		img :"images/meghani_front_sldier.png",
		img01:'images/slider_01.png"',	
		img02:'images/ceartificate_slider.png"',
		img03:'images/team_slider.png"',	
		img04:'images/operation_slider.png"',
		img05:'images/endoscopic_equipment_slider.png"',
		img06:'images/waiting_room_slider.png"',	
		img07:'images/meghani_facilty_slider.png"',
		img08:'images/treatments_slider.png"',
		img09:'images/wards_sldier.png"',
	}]
	
	document.querySelector('section').innerHTML +=`
	    <div id="myCarousel" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2" ></li>
				<li data-target="#myCarousel" data-slide-to="3"></li> 
				<li data-target="#myCarousel" data-slide-to="4" ></li>
				<li data-target="#myCarousel" data-slide-to="5"></li> 
				<li data-target="#myCarousel" data-slide-to="6" ></li>
				<li data-target="#myCarousel" data-slide-to="7"></li>
				<li data-target="#myCarousel" data-slide-to="8"></li>
				<li data-target="#myCarousel" data-slide-to="9"></li>
				<li data-target="#myCarousel" data-slide-to="10"></li>
			 
			</ol>

			<!-- Wrapper for slides -->
			<div class="carousel-inner">
			  <div class="item  active">
				<img src="${jason[0].img01}" alt="${jason[0].img01}" style="width:100%;">
			  </div>
			  <div class="item">
				<img src="${jason[0].img}" alt="${jason[0].img}" style="width:100%;">
			  </div>

			  <div class="item">
				<img src="${jason[0].img01}" alt="${jason[0].img01}" style="width:100%;">
			  </div>
			   <div class="item">
				<img src="${jason[0].img02}" alt="${jason[0].img02}" style="width:100%;">
			  </div>
			 <div class="item">
				<img src="${jason[0].img03}" alt="${jason[0].img03}" style="width:100%;">
			  </div> 
			  <div class="item">
				<img src="${jason[0].img04}" alt="${jason[0].img04}" style="width:100%;">
			  </div> 
			  <div class="item">
				<img src="${jason[0].img05}" alt="${jason[0].img05}" style="width:100%;">
			  </div>  
			  <div class="item">
				<img src="${jason[0].img06}" alt="${jason[0].img06}" style="width:100%;">
			  </div> 
			  <div class="item">
				<img src="${jason[0].img07}" alt="${jason[0].img07}" style="width:100%;">
			  </div> 
			  <div class="item">
				<img src="${jason[0].img08}" alt="${jason[0].img08}" style="width:100%;">
			  </div>  
			  <div class="item">
				<img src="${jason[0].img09}" alt="${jason[0].img09}" style="width:100%;">
			  </div>
			
			  
			</div>

			<!-- Left and right controls -->
			<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			  <span class="glyphicon glyphicon-chevron-left"></span>
			  <span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#myCarousel" data-slide="next">
			  <span class="glyphicon glyphicon-chevron-right"></span>
			  <span class="sr-only">Next</span>
			</a>
		  </div>
		</div>
	`;
}
slider();


