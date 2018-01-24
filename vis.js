	var width = 870;
	var height = 600;
	var currentSkill = "";

	var svg = d3.select("#chart")
		.append("svg")
		.attr("height", height)
		.attr("width", width)
		.attr("transform", "translate(0,0")

	var tooltip = d3.select("#chart")
		.append("div")
		.style("z-index", "10")
		.style("visibility", "hidden")
		.text("a simple tooltip");

	var radiusScale = d3.scaleSqrt().domain([1, 10]).range([10, 35])

	var xForce = d3.forceX(width / 2).strength(0.04)
	var yForce = d3.forceY(height / 2).strength(0.12)
	var forceCollision = d3.forceCollide(function(d) { //Function used to set a force deoendent on how big each circle is.
		return radiusScale(d.VizSkills);
	});

	//Create force simulation. Takes every circle and applies forces to them
	//in order for them to go to a certain place. In this case, the center.	
	var simulation = d3.forceSimulation()
		.force("xForce", xForce)
		.force("yForce", yForce)
		.force("collision", forceCollision)

	d3.queue()
		.defer(d3.csv, "visData.csv")
		.await(ready)

	function ready (error, datapoints) {

		var circles = svg.selectAll(".Alias")
			.data(datapoints)
			.enter().append("circle")
			.attr("class", "Alias")
			.attr("r", function(d) {
				return radiusScale(d.VizSkills)
			}) //Function that determines the scale of the circle depending on answer
			.attr("fill", function(d) {
				var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
				return(randomColor)
			})
			.attr("cx", 80) //plats i x-led där cirklarna befinner sig på vårt canvas
			.attr("cy", 80) //plats i y-led där cirklarna befinner sig på vårt canvas
			.attr("title", function(d) {
				return d.VizSkills
			})
			.on("mouseover", function(d) {
				document.getElementById("tooltip").innerHTML = d.Alias + ""
				return d3.select("#tooltip").style("visibility", "visible");})
			.on("mousemove", function() {
				return d3.select("#tooltip").style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
			.on("mouseout", function() {
				return d3.select("#tooltip").style("visibility", "hidden");})
			.on("click", function(d) {
					
				document.getElementById("info").style.visibility = "visible";
				document.getElementById("info").innerHTML = "<i class='fas fa-user-circle'></i> : " + d.Alias + " | <i class='fas fa-info'></i> : " + d.VizSkills + " | <i class='fas fa-chart-bar'></i> : " + d.StatSkills + " | <i class='fas fa-plus'></i> : " + d.MathSkills + " | <i class='fas fa-pencil-alt'></i> : " + d.ArtSkills + " | <i class='fas fa-laptop'></i> : " + d.ComputerSkills + " | <i class='far fa-file-code'></i>: " + d.ProgrammingSkills + " | <i class='fab fa-linode'></i> : " + d.GraphicSkills + " | <i class='fas fa-user'></i> <i class='fas fa-laptop'></i> : " + d.HCISkills + " | <i class='fab fa-pied-piper-alt'></i> : " + d.UXSkills + " | <i class='fas fa-users'></i> : " + d.CollabSkills + " | <i class='fab fa-github'></i> : " + d.CodeRepoSkills;


			})


// CODE BELOW CHANGES WHAT SKILL IS VISUALISED, 
// FOLLOWING A USER BUTTON CLICK
		
	d3.select("#VizSkills").on("click", function(d) {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("VizSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.VizSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
			return radiusScale(d.VizSkills);
		});
	});

	d3.select("#StatSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("StatSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.StatSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.StatSkills);
		});
	});

	d3.select("#MathSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("MathSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.MathSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.MathSkills);
		});
	});

	d3.select("#ArtSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("ArtSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.ArtSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.ArtSkills);
		});
	});

	d3.select("#ComputerSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("ComputerSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.ComputerSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.ComputerSkills);
		});
	});

	d3.select("#ProgrammingSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("ProgrammingSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.ProgrammingSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.ProgrammingSkills);
		});
	});

	d3.select("#GraphicSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("GraphicSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.GraphicSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.GraphicSkills);
		});
	});

	d3.select("#HCISkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("HCISkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.HCISkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.HCISkills);
		});
	});

	d3.select("#UXSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("UXSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.UXSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.UXSkills);
		});
	});

	d3.select("#CollabSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("CollabSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.CollabSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.CollabSkills);
		});
	});

	d3.select("#CodeRepoSkills").on("click", function() {
		var buttons = (document.getElementsByClassName("btn btn-primary"));
		for (i = 0; i < buttons.length; i++) { 
    		buttons[i].style.backgroundColor = "#007bff";
		}
		document.getElementById("CodeRepoSkills").style.backgroundColor = "#1cd760";
		simulation
			.force("collision", d3.forceCollide(function(d) {
				return radiusScale(d.CodeRepoSkills);
			}))
			.alphaTarget(0.04)
			.restart() //re-add force upon clicking a button
		circles
			.attr("r", function(d) {
				return radiusScale(d.CodeRepoSkills);
		});
	});

		simulation.nodes(datapoints) //Each node is a circle
			.on("tick", updateForce); //Fire updateForce on circles each frame

		function updateForce() { //Automatically update all our datapoints with the x and y we want them to be at

			circles
				.attr("cx", function(d) {
					return d.x
				})
				.attr("cy", function(d) {
					return d.y
				})
		}
	};
