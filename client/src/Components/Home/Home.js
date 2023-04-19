import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './home.css'
// import { NavLink } from "react-router-dom";
import CanvasJSReact from './assets/canvasjs.react';

const Home = () => {
	const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

        // let jwttoken = sessionStorage.getItem('jwttoken');
        // fetch("https://localhost:44308/Customer", {
        //     headers: {
        //         'Authorization': 'bearer ' + jwttoken
        //     }
        // }).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     listupdate(resp);
        // }).catch((err) => {
        //     console.log(err.messsage)
        // });

    }, []);
	
	var CanvasJSChart = CanvasJSReact.CanvasJSChart;
	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "Easy Web Services"
			},
			axisY: {
				title: "Data",
				suffix: "%"
			},
			toolTip: {
				shared: true,
				reversed: true
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true
			},
			data: [
			{
				type: "stackedArea100",
				name: "Awaited",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 40 },
					{ x: new Date(2001, 0), y: 62 },
					{ x: new Date(2002, 0), y: 53 },
					{ x: new Date(2003, 0), y: 49 },
					{ x: new Date(2004, 0), y: 52 },
					{ x: new Date(2005, 0), y: 32 },
					{ x: new Date(2006, 0), y: 28 },
					{ x: new Date(2007, 0), y: 46 },
					{ x: new Date(2008, 0), y: 55 },
					{ x: new Date(2009, 0), y: 88 },
					{ x: new Date(2010, 0), y: 68 },
					{ x: new Date(2011, 0), y: 63 },
					{ x: new Date(2012, 0), y: 65 },
					{ x: new Date(2013, 0), y: 68 },
					{ x: new Date(2014, 0), y: 48 },
					{ x: new Date(2015, 0), y: 39 },
					{ x: new Date(2016, 0), y: 20 },
					{ x: new Date(2017, 0), y: 26 },
					{ x: new Date(2018, 0), y: 16 },
					{ x: new Date(2019, 0), y: 38 },
					{ x: new Date(2020, 0), y: 22 },
					{ x: new Date(2021, 0), y: 23 },
					{ x: new Date(2022, 0), y: 18 },
					{ x: new Date(2023, 0), y: 34 }
				]
			},
			{
				type: "stackedArea100",
				name: "Failed",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 20 },
					{ x: new Date(2001, 0), y: 12 },
					{ x: new Date(2002, 0), y: 19 },
					{ x: new Date(2003, 0), y: 28 },
					{ x: new Date(2004, 0), y: 42 },
					{ x: new Date(2005, 0), y: 75 },
					{ x: new Date(2006, 0), y: 85 },
					{ x: new Date(2007, 0), y: 55 },
					{ x: new Date(2008, 0), y: 45 },
					{ x: new Date(2009, 0), y: 38 },
					{ x: new Date(2010, 0), y: 29 },
					{ x: new Date(2011, 0), y: 19 },
					{ x: new Date(2012, 0), y: 14 },
					{ x: new Date(2013, 0), y: 18 },
					{ x: new Date(2014, 0), y: 16 },
					{ x: new Date(2015, 0), y: 13 },
					{ x: new Date(2016, 0), y: 10 },
					{ x: new Date(2017, 0), y: 14 },
					{ x: new Date(2018, 0), y: 21 },
                    { x: new Date(2019, 0), y: 39 },
					{ x: new Date(2020, 0), y: 23 },
					{ x: new Date(2021, 0), y: 24 },
					{ x: new Date(2022, 0), y: 19 },
					{ x: new Date(2023, 0), y: 35 }
				]
			},
			{
				type: "stackedArea100",
				name: "Delivered",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 0 },
					{ x: new Date(2001, 0), y: 6 },
					{ x: new Date(2002, 0), y: 8 },
					{ x: new Date(2003, 0), y: 10 },
					{ x: new Date(2004, 0), y: 12 },
					{ x: new Date(2005, 0), y: 15 },
					{ x: new Date(2006, 0), y: 17 },
					{ x: new Date(2007, 0), y: 18 },
					{ x: new Date(2008, 0), y: 25 },
					{ x: new Date(2009, 0), y: 18 },
					{ x: new Date(2010, 0), y: 24 },
					{ x: new Date(2011, 0), y: 29 },
					{ x: new Date(2012, 0), y: 31 },
					{ x: new Date(2013, 0), y: 52 },
					{ x: new Date(2014, 0), y: 72 },
					{ x: new Date(2015, 0), y: 63 },
					{ x: new Date(2016, 0), y: 20 },
					{ x: new Date(2017, 0), y: 18 },
					{ x: new Date(2018, 0), y: 17 },
					{ x: new Date(2019, 0), y: 40 },
					{ x: new Date(2020, 0), y: 24 },
					{ x: new Date(2021, 0), y: 25 },
					{ x: new Date(2022, 0), y: 22 },
					{ x: new Date(2023, 0), y: 36 }
				]
			},
			{
				type: "stackedArea100",
				name: "Submitted",
				showInLegend: true,
				xValueFormatString: "YYYY",
				dataPoints: [
					{ x: new Date(2000, 0), y: 2 },
					{ x: new Date(2001, 0), y: 5 },
					{ x: new Date(2002, 0), y: 7 },
					{ x: new Date(2003, 0), y: 11 },
					{ x: new Date(2004, 0), y: 14 },
					{ x: new Date(2005, 0), y: 13 },
					{ x: new Date(2006, 0), y: 17 },
					{ x: new Date(2007, 0), y: 12 },
					{ x: new Date(2008, 0), y: 23 },
					{ x: new Date(2009, 0), y: 16 },
					{ x: new Date(2010, 0), y: 26 },
					{ x: new Date(2011, 0), y: 27 },
					{ x: new Date(2012, 0), y: 33 },
					{ x: new Date(2013, 0), y: 53 },
					{ x: new Date(2014, 0), y: 75 },
					{ x: new Date(2015, 0), y: 66 },
					{ x: new Date(2016, 0), y: 28 },
					{ x: new Date(2017, 0), y: 37 },
					{ x: new Date(2018, 0), y: 39 },
					{ x: new Date(2019, 0), y: 42 },
					{ x: new Date(2020, 0), y: 26 },
					{ x: new Date(2021, 0), y: 27 },
					{ x: new Date(2022, 0), y: 13 },
					{ x: new Date(2023, 0), y: 38 }
				]
			}
		]
		}

  return (
    <div className="Home">

  <div className="hom">
  	<div className="hom1">
  		<div className="hom1_left11">
		  <div className='hom1_left'>  
		     <h3>Summary Overview</h3>
		     <p>Today</p>
		     <p>Week</p>
		     <p>Month</p>
		  </div>
			<div className='hom1_left1_1'>
			  <CanvasJSChart options = {options} />
			</div>
  		</div>
  		<div className="hom1_right">
  			<h5>Delivered Percent</h5>
  			<p style={{color: "#aaa"}}>out of 0</p>
  			<h5 style={{textalign: "center", paddingtop: "60px"}}>No Data%</h5>
  			
  		</div>
  	</div>

  </div>

 <div className="hom2_0">
 	<h2>Quick Status</h2>
  <div className="hom2">
  		<div className="hom2_1">
  			<h3>Today</h3>
  			<h4>0</h4>
  		</div>

  		<div className="hom2_1">
  			<div className="hom2_2">
  			  <h3>Week</h3>
  			  <p style={{paddingtop: "5px"}}>(Excluding Today)</p>
  			  <h4>0</h4>
  		   </div>
  		</div>

  		<div className="hom2_1">
  			<h3>Month</h3>
  			<h4>0</h4>
  		</div>
  		
  	</div>
  </div>

  <div className="hom3">
  	<h2>Scheduled SMS</h2>
  	
  </div>

  {/* ============Step4============== */}

  <div className="hom4">
  	
  	<div className="hom4_0">
  	<div className="hom4_left">
  		<h4>Quick Shortcuts</h4>
  		<div className="hom4_left1">
  			<p></p>
  			<p style={{width: "150px"}}>DLT Management</p>
			  <li><a className="nav-link" href="/Entity"><img  style={{width:"2rem",marginBottom:"10px"}} src='/Images/shape.svg'alt='wel'/></a></li>
  {/*<p><NavLink to="/Entity"><img  style={{width:"2rem",marginBottom:"10px",marginLeft:"-10px"}} src='/Images/shape.svg'alt='wel'/></NavLink></p>*/}
  		</div>

  		<div className="hom4_left2">
  			<p className='icon'><i className="fa-solid fa-bullhorn"></i></p>
  			<p style={{width: "180px"}}>Scheduled Campaigns</p>
  			<p style={{marginLeft:"-14px"}}>0</p>
  		</div>
  		<div className="hom4_left3">
  			<p className='icon1'><i className="fa-solid fa-user"></i></p>
  			<p >Inactive Accounts</p>
  			<p>0</p>
  		</div>
  		<div className="hom4_left4">
  			<p className='icon2'><i className="fa-solid fa-user"></i></p>
  			<p>Sender ID</p>
  			<p>10</p>
  		</div>

  		<div className="hom4_left5">
  			<p className='icon3'><i className="fa-solid fa-message"></i></p>
  			<p >Templates</p>
  			<p>15</p>
  		</div>
  		
  	</div>
  	<div className="hom4_right">
  		<h4 style={{paddingLeft:"10px"}}>Phonebook - Quick Shortcuts</h4>
  		<div className="hom4_right1">
  			<div className="hom4_right2">
  				<p><img  style={{width:"3rem",marginBottom:"10px"}} src='/Images/contact-icon.svg'alt='wel'/></p>
  				<p>0 Contacts</p>
  			</div>
  			<div  className="hom4_right2_1">
  				<p><img  style={{width:"3rem",marginBottom:"10px"}} src='/Images/group-icon.svg'alt='wel'/></p>
               <p>0 Groups</p>
  			</div>
  		</div>
  	</div>
  </div>
  </div>

  </div>
  )
}

export default Home;