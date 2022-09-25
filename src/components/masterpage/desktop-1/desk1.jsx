import Header from ".././header";
import SideBar from ".././sidebar";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import "./desk1.css"
import '../home.css'
const Desk1 = () => {   
    const [post, setPost] = useState([]);
    const d1 = {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "authentication": localStorage.getItem("userInfo"),
        }
    }
    useEffect(() => {
        axios.get("https://realrohan.herokuapp.com/form",d1).then((respond) => {
            setPost(respond.data);
        })
    }, []);
    const sold=(e)=>{
        e.preventDefault()
        // console.log(e.target.textContent);
        if(e.target.textContent==="unsold"){
            e.target.textContent="Sold"
            if(e.target.textContent==="Sold"){
                const td=document.getElementsByTagName("td")[7];
                td.textContent=0;
            }
        }
    }
    const [searchTerm , setsearchTerm]=useState("")
    // const id="PPD"+parseInt(Math.random()*10000);
    const navigate = useNavigate();
    const forword = (e) => {
        e.preventDefault();
        navigate("/desk2");
    }
    return (
        <>
            <div className="desk-1-main">
                <div className="changed-side-bar">
                    <SideBar />
                </div>
                <div className="home-header">
                    <div className="home-head">
                        <Header />
                    </div>
                    <div className="home-content">
                        <div id="desk1-menu">
                            <div className="search-menu">
                                <input type="text/number" placeholder="Search PPD ID" id="myInput" onChange={(e)=>{setsearchTerm(e.target.value)}} />
                                <button  >
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.739 22.825L17.77 16.856C19.3966 14.8666 20.1964 12.3281 20.0039 9.76557C19.8113 7.20304 18.6412 4.81254 16.7356 3.08853C14.83 1.36452 12.3346 0.438901 9.76565 0.503133C7.1967 0.567364 4.75071 1.61653 2.93362 3.43362C1.11653 5.25071 0.0673644 7.6967 0.00313259 10.2656C-0.0610992 12.8346 0.864519 15.33 2.58853 17.2356C4.31254 19.1412 6.70304 20.3113 9.26557 20.5039C11.8281 20.6964 14.3666 19.8966 16.356 18.27L22.325 24.239C22.4173 24.3345 22.5276 24.4107 22.6496 24.4631C22.7716 24.5155 22.9028 24.5431 23.0356 24.5443C23.1684 24.5454 23.3001 24.5201 23.423 24.4698C23.5459 24.4195 23.6575 24.3453 23.7514 24.2514C23.8453 24.1575 23.9195 24.0459 23.9698 23.923C24.0201 23.8001 24.0454 23.6684 24.0443 23.5356C24.0431 23.4028 24.0155 23.2716 23.9631 23.1496C23.9107 23.0276 23.8345 22.9173 23.739 22.825ZM10.032 18.532C8.44976 18.532 6.90304 18.0628 5.58745 17.1838C4.27185 16.3047 3.24647 15.0553 2.64097 13.5935C2.03547 12.1317 1.87704 10.5231 2.18573 8.97129C2.49441 7.41944 3.25633 5.99397 4.37515 4.87515C5.49397 3.75633 6.91944 2.99441 8.47129 2.68573C10.0231 2.37704 11.6317 2.53547 13.0935 3.14097C14.5553 3.74647 15.8047 4.77185 16.6838 6.08745C17.5628 7.40304 18.032 8.94976 18.032 10.532C18.032 12.6537 17.1892 14.6886 15.6889 16.1889C14.1886 17.6892 12.1537 18.532 10.032 18.532Z" fill="#6AB4F8" />
                                    </svg>
                                </button>
                            </div>
                            <div className="collection">
                                <button onClick={forword}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#FAFBFC" />
                                    </svg> Add Property
                                </button>

                            </div>
                        </div>
                        <div id="desk1-data">
                            <tr className="table-head">
                                <th>PPD ID</th>
                                <th>Image</th>
                                <th>Property</th>
                                <th>Contact</th>
                                <th>Area</th>
                                <th>Views</th>
                                <th>Status</th>
                                <th>Days Left</th>
                                <th>Action</th>
                            </tr>
                            {post.filter(user=>user._id.includes(searchTerm)).map((value, i) => {
                                return (
                                    <>
                                        <tr className="table-head">
                                            <td id="ppdid">{value._id}</td>
                                            <td><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 14V2C19.9984 1.47005 19.7872 0.962265 19.4125 0.587535C19.0377 0.212805 18.5299 0.00158273 18 0H6C5.47005 0.00158273 4.96227 0.212805 4.58753 0.587535C4.2128 0.962265 4.00158 1.47005 4 2V14C4.00158 14.5299 4.2128 15.0377 4.58753 15.4125C4.96227 15.7872 5.47005 15.9984 6 16H18C18.5299 15.9984 19.0377 15.7872 19.4125 15.4125C19.7872 15.0377 19.9984 14.5299 20 14ZM9 10L11.03 12.71L14 9L18 14H6L9 10ZM0 4V18C0.00158273 18.5299 0.212805 19.0377 0.587535 19.4125C0.962265 19.7872 1.47005 19.9984 2 20H16V18H2V4H0Z" fill="#C3C3C3" />
                                            </svg>
                                            </td>
                                            <td>{value.property}</td>
                                            <td>{value.contact}</td>
                                            <td>{value.area}</td> 
                                            <td>{value.view}</td>
                                            <td><button onClick={sold}>{value.status}</button></td>
                                            <td>{value.daysleft}</td>
                                            <td><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.69 0.200012C7.842 0.200012 3.445 2.85301 0.2 7.16101C0.0701779 7.33411 0 7.54465 0 7.76102C0 7.97739 0.0701779 8.18792 0.2 8.36102C3.444 12.675 7.841 15.327 12.69 15.327C17.539 15.327 21.935 12.674 25.18 8.36601C25.3098 8.19292 25.38 7.98238 25.38 7.76601C25.38 7.54964 25.3098 7.33911 25.18 7.16602C21.936 2.85302 17.539 0.200012 12.69 0.200012ZM13.038 13.09C11.9551 13.1607 10.8764 12.8996 9.94567 12.3415C9.01497 11.7834 8.27651 10.9549 7.82877 9.96633C7.38102 8.9778 7.24527 7.87626 7.43961 6.80859C7.63395 5.74093 8.14915 4.75788 8.91651 3.99052C9.68386 3.22317 10.6669 2.70797 11.7346 2.51363C12.8022 2.31929 13.9038 2.45504 14.8923 2.90278C15.8809 3.35052 16.7094 4.08898 17.2675 5.01968C17.8256 5.95039 18.0867 7.02911 18.016 8.11201C17.9308 9.40425 17.379 10.6215 16.4632 11.5372C15.5475 12.453 14.3302 13.0048 13.038 13.09ZM12.877 10.629C12.2941 10.6664 11.7136 10.5253 11.2129 10.2245C10.7122 9.92373 10.315 9.47749 10.0743 8.94527C9.83357 8.41305 9.76074 7.82012 9.8655 7.24547C9.97026 6.67082 10.2476 6.14173 10.6607 5.72869C11.0737 5.31565 11.6028 5.03828 12.1775 4.93352C12.7521 4.82876 13.345 4.90158 13.8773 5.1423C14.4095 5.38301 14.8557 5.78018 15.1565 6.28089C15.4573 6.78161 15.5984 7.36209 15.561 7.94501C15.5173 8.64254 15.2205 9.30013 14.7263 9.79432C14.2321 10.2885 13.5745 10.5853 12.877 10.629Z" fill="#DFDFDF" />
                                            </svg>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.714844 12.61V15.786H3.89084L13.2578 6.419L10.0818 3.241L0.714844 12.61ZM15.7148 3.962C15.7934 3.88368 15.8557 3.79064 15.8982 3.68819C15.9408 3.58575 15.9627 3.47592 15.9627 3.365C15.9627 3.25408 15.9408 3.14425 15.8982 3.0418C15.8557 2.93936 15.7934 2.84631 15.7148 2.768L13.7328 0.785997C13.6545 0.707444 13.5615 0.645119 13.459 0.602593C13.3566 0.560068 13.2468 0.538177 13.1358 0.538177C13.0249 0.538177 12.9151 0.560068 12.8126 0.602593C12.7102 0.645119 12.6172 0.707444 12.5388 0.785997L10.9888 2.341L14.1648 5.512L15.7148 3.962Z" fill="#DFDFDF" />
                                                </svg>

                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Desk1;