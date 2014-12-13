
			

			var score = function() {


			}


			//Social Capital
			var sc_changed = function changed(){
			   
			    console.log("a change!", this.value);
			    function updateInput(ish){
			    	socialcapWeight.value = ish;
			    	};
			     // return this.value;
			    test = updateInput(this.value);
			    //console.log(socialcapWeight.value);
			    return socialcapWeight.value;

			};
			
			var socialcapInput = document.getElementsByClassName('socialcapInput');
			var socialcapWeight = socialcapInput[0];
			// console.log(socialcapWeight);
			socialcapWeight.onchange =  sc_changed;
		
			console.log(socialcapWeight.sc_changed);

			
			//Affordability
			var aff_changed = function changed(){
			    
			    console.log("a change!", this.value, arguments);
			}
			
			var affordabilityInput = document.getElementsByClassName('affordabilityInput');
			var affordabilityWeight = affordabilityInput[0];
			console.log(affordabilityWeight);
			affordabilityWeight.onchange = aff_changed;


			//Density
			var dens_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var densityInput = document.getElementsByClassName('densityInput');
			var densityWeight = densityInput[0];
			console.log(densityWeight);
			densityWeight.onchange = dens_changed;


			//Safety
			var safe_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var safetyInput = document.getElementsByClassName('safetyInput');
			var safetyWeight = safetyInput[0];
			console.log(safetyWeight);
			safetyWeight.onchange = safe_changed;


			//Optimism
			var opti_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var optimismInput = document.getElementsByClassName('optimismInput');
			var optimismWeight = optimismInput[0];
			console.log(optimismWeight);
			optimismWeight.onchange = opti_changed;
			

			//Foodie
			var food_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var foodieInput = document.getElementsByClassName('foodieInput');
			var foodieWeight = foodieInput[0];
			console.log(foodieWeight);
			foodieWeight.onchange = food_changed;


			//Public Space
			var ps_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var publicspaceInput = document.getElementsByClassName('publicspaceInput');
			var publicspaceWeight = publicspaceInput[0];
			console.log(publicspaceWeight);
			publicspaceWeight.onchange = ps_changed;
			

			//Trendy
			var trend_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var trendyInput = document.getElementsByClassName('trendyInput');
			var trendyWeight = trendyInput[0];
			console.log(trendyWeight);
			trendyWeight.onchange = trend_changed;
			

			//Musical
			var mus_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var musicalInput = document.getElementsByClassName('musicalInput');
			var musicalWeight = musicalInput[0];
			console.log(musicalWeight);
			musicalWeight.onchange = mus_changed;


			//Social Justice
			var sj_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var socialjusticeInput = document.getElementsByClassName('socialjusticeInput');
			var socialjusticeWeight = socialjusticeInput[0];
			console.log(socialjusticeWeight);
			socialjusticeWeight.onchange = sj_changed;


			//Night Life
			var nl_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var nightlifeInput = document.getElementsByClassName('nightlifeInput');
			var nightlifeWeight = nightlifeInput[0];
			console.log(nightlifeWeight);
			nightlifeWeight.onchange = nl_changed;


			//Fitness
			var fit_changed = function changed(){
			    console.log("a change!", this.value, arguments);
			}
			var fitnessInput = document.getElementsByClassName('fitnessInput');
			var fitnessWeight = fitnessInput[0];
			console.log(fitnessWeight);
			fitnessWeight.onchange = fit_changed;

			
		