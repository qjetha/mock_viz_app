document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('retention').onclick = function() {

		// Add HTML Radio Buttons
		var button = document.createElement('BUTTON')
		button.id = 'yr_by_yr_button'
		var text_button = document.createTextNode("Year Trends")

		button.appendChild(text_button)
		document.getElementById('header').appendChild(button)


		// Remove Canvas - Delete Element and Re-Create
		function clear_canvas(year, which_function) {
			const fadebox = document.getElementById('my_chart');
			fadebox.style.opacity = 0;
			fadebox.style.transition = "opacity 0.3s";

			fadebox.addEventListener('webkitTransitionEnd', function(event) {
				fadebox.remove()

				// Add New Canvas
				var canv = document.createElement('canvas')
				canv.id = 'my_chart'
				document.getElementById('canvas_box').append(canv)

				// Create Viz
				if (which_function=="bar") {
					create_bar(year)
				}
				if (which_function=="line") {
					create_line(year)
				}
			})
		}


		function create_bar(year) {

			// Create Data - Labels and Values
			degrees =  ['Business Administration', 'Computer Information Technology',
						'Computer Media Technology', 'Criminal Justice', 
						'Early Childhood Education', 'Hospitality', 'Legal Studies',
						'Visual Arts']

			function get_data(len, min_val, max_val) {

				// Random Number between 1 and max_val
				var make_random_number = function() {
					return Math.floor(Math.random() * (max_val - min_val + 1) + min_val)
				}
				
				return Array(len).fill(0).map(make_random_number)
			
			}


			// Create Bar Chart
			var ctx = document.getElementById('my_chart')
			var chart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			    	labels: degrees,
			    	datasets: [{
			    		data: get_data(degrees.length, 70, 100),
			    		backgroundColor: [
	  				    	'#a65eff',
	  				    	'#d971ff',
					        '#ff90b9',
					        '#ffa65e',
					        '#ffdd80',
					        '#f4ffe0',
					        '#aec8ff',
					        '#ff6d9e'
			    		]
			    	}]
			    },
			    options: {
			    	responsive: false,
			    	title: {
			    		display: true,
			    		text: ['Proportion of Students Retained by Degree Program in ' + year],
			    		fontColor: '#373c56',
			    		fontStyle: 'bold',
			    		fontSize: 20,
			    		padding: 30
			    	},
			    	scales: {
			    		yAxes: [{
			    			ticks: {
			    				suggestedMin: 0,
			    				suggestedMax: 100
			    			}
			    		}],
			    		xAxes: [{
			    			ticks: {
			    				fontSize: 14
			    			}
			    		}]
			    	},
			    	legend: {
			    		display: false
			    	}
			    }
			});
		}


		function create_line(year) {

			// Create Data - Labels and Values
			degrees =  ['Business Administration', 'Computer Information Technology',
						'Computer Media Technology', 'Criminal Justice', 
						'Early Childhood Education', 'Hospitality', 'Legal Studies',
						'Visual Arts']

			function get_data(len, min_val, max_val) {

				// Random Number between 1 and max_val
				var make_random_number = function() {
					return Math.floor(Math.random() * (max_val - min_val + 1) + min_val)
				}
				
				return Array(len).fill(0).map(make_random_number)
			
			}

			// Create Line Chart
			var ctx = document.getElementById('my_chart')
			var chart = new Chart(ctx, {
			    type: 'line',
			    data: {
			    	labels: ["2017", "2018", "2019", "2020"],
			    	datasets: [{
			    		label: "Business Administration",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#a65eff',
			    		fill: false
			    	}, {
			    		label: "Computer Information Technology",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#d971ff',
			    		fill: false
			    	}, {
			    		label: "Computer Media Technology",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#ff90b9',
			    		fill: false
			    	}, {
			    		label: "Criminal Justice",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#ffa65e',
			    		fill: false
			    	}, {
			    		label: "Early Childhood Education",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#ffdd80',
			    		fill: false
			    	}, {
			    		label: "Hospitality",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#f4ffe0',
			    		fill: false
			    	}, {
			    		label: "Legal Studies",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#aec8ff',
			    		fill: false
			    	}, {
			    		label: "Visual Arts",
			    		data: get_data(4, 70, 100),
			    		borderColor: '#ff6d9e',
			    		fill: false
			    	}]
				},
			    options: {
			    	responsive: false,
			    	title: {
			    		display: true,
			    		text: ['Student Retention by Degree Program ' + year],
			    		fontColor: '#373c56',
			    		fontStyle: 'bold',
			    		fontSize: 20,
			    		padding: 30
			    	}
			    }
			})
		}


		clear_canvas("2020", "bar")


		// Year by Year Trends
		document.getElementById('yr_by_yr_button').onclick = function() {
			clear_canvas("2017-2020", "line")
		}


	}


})