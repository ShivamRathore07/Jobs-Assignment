import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import style from '../Styles/HomePage.module.css'
import Navbar from "./Navbar";

export const HomePage = () => {
	const [data, setData] = useState([]);
	const [pagetotal, setPagetotal] = useState([]);

	const Navigate = useNavigate();
	const search = useLocation().search;

	const page = new URLSearchParams(search).get("page") || 1;
	const pagesize = new URLSearchParams(search).get("pagesize") || 6;
	// const role = new URLSearchParams(search).get("role") || "all";

	const getData = () => {
		axios.get(`https://jobapplicationshivam.herokuapp.com/jobs?page=${page}&pagesize=${pagesize}`)
			.then((res) => {
				setData(res.data.jobs)
				setPagetotal(res.data.total_pages)
			}).catch(err => console.log(err))
	}
	console.log(data);
	console.log(pagetotal);


	let numpages = [];
	for (let i = 1; i <= Math.ceil(pagetotal); i++) {
		numpages.push(i);
	}
	console.log(numpages)

	useEffect(() => {
		getData();
	}, [page])

const handleApply=(id)=>{
	axios.post(`https://jobapplicationshivam.herokuapp.com/cart/apply`,{
		body:JSON.stringify({jobID:id}),
		headers: {'Content-Type': 'application/json'},
 })
	.then((res)=>console.log(res))
	.catch((err)=>console.log(err))

}

	return (
		<>
		<Navbar/>
		<div className={style.listcontainer}>
			<div className={style.ad}>
				Right Job at Right Place
			</div>
			<div className={style.joblist}>
				{data.map((el) => {
						return (
                <div className={style.Box} key={el._id}>
								<div className={style.outer} >
									<div className={style.imgdiv}>
										<img src={el.logo} alt="logo"/>
									</div>
									<div className={style.description} key={el._id}>
										<h4 className={style.thick}>{el.name}</h4>
										<p className={style.thin}>Role:{el.role}</p>
										<p className={style.thin}>Location:{el.location}</p>
										<p className={style.thin}>Experirnce:{el.experience}</p>
									</div> 									 
								</div>
								<button className={style.Button} onClick={()=>handleApply(el._id)}>Apply</button>
								</div>
						)
					})
				}
			</div>
			<div className={style.paginationbox}>
				{
					numpages?.map((el) => {
						return (
							<button onClick={() => {
								Navigate(`/?page=${el}&pagesize=${pagesize}`)
							}}>{el}</button>
						)
					})
				}
			</div>
		</div>
		</>
	)
}