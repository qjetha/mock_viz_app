document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('transfer').onclick = function() {

		// Remove Canvas - Delete Element and Re-Create
		function clear_canvas() {
			const fadebox = document.getElementById('my_chart');
			fadebox.style.opacity = 0;
			fadebox.style.transition = "opacity 0.3s";

			const headbox = document.getElementById('header');
			headbox.style.opacity = 0;
			headbox.style.transition = "opacity 0.3s"

			fadebox.addEventListener('webkitTransitionEnd', function(event) {
				fadebox.remove()
				headbox.remove()

				// Add New Canvas
				var canv = document.createElement('canvas')
				canv.id = 'my_chart'
				document.getElementById('canvas_box').append(canv)

				// Add New Header
				var head_box = document.createElement('div')
				head_box.id = 'header'
				document.getElementById('header_box').append(head_box)

				// Create Viz
				create_viz()
			})
		}

		function create_viz() {

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


			// Create Donut Viz
			var ctx = document.getElementById('my_chart')
			var chart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			    	labels: degrees,
			    	datasets: [{
						label: "White",
						backgroundColor: "#caf270",
						data: get_data(degrees.length, 0, 12)
					}, {
						label: "Black",
						backgroundColor: "#45c490", 
						data: get_data(degrees.length, 0, 4)
					}, {
						label: "Hispanic",
						backgroundColor: "#008d93", 
						data: get_data(degrees.length, 0, 8)
					}, {
						label: "Other",
						backgroundColor: "#2e5468",
						data: get_data(degrees.length, 0, 12)
					}]
			    },
			    options: {
			    	responsive: false,
			    	title: {
			    		display: true,
			    		text: 'Proportion of Students Transferring to a 4 Year Degree - By Race [2020]',
			    		fontColor: '#373c56',
			    		fontStyle: 'bold',
			    		fontSize: 20,
			    		padding: 30
			    	},
			    	scales: {
			    		xAxes: [{
			    			stacked: true
			    		}],
			    		yAxes: [{
			    			stacked: true,
			    			ticks: {
			    				suggestedMin: 0,
			    				suggestedMax: 50
			    			}
			    		}]
			    	}
			    }
			});
		}

		clear_canvas()

	}

})