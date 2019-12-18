import React from 'react';

    const imgSrc_1 = `https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg`
    const imgSrc_2 = `https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg`

const Tabs = (props) => (
                <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                    <div class="card-header">
                     <h3> Users </h3>
                    </div>
                    <div class="card-body contacts_body">
                        <ui class="contacts">
                            {
                                props.tabs.map((tab, index) => (
                                    <li
                                        key={index}
                                        className={tab.active ? 'active' : ''}
                                        onClick={() => props.onClick(tab.id)}
                                        >
                                           <div class="d-flex bd-highlight">
                                                <div class="img_cont">
                                                    <img src={ tab.active ? imgSrc_1: imgSrc_1} class= "rounded-circle user_img" />
                                                    <span class="online_icon"></span>
                                                </div>
                                                <div class="user_info">
                                                    <span>{tab.title}</span>
                                                    <p>{tab.title} is {tab.active ? "Online" : "Offline"}</p>
                                                </div>
                                            </div>
                                        
                                    </li>
                                ))
                            }
                        </ui>
                    </div>
                    <h5 class="card-footer">Designed By MO</h5>
                </div></div>
    
);

export default Tabs;

              


       /*         <div className='Tabs'>
        <h3>Users</h3>
        <div className='Tabs-buttons'>
        {
            props.tabs.map((tab, index) => (
                <button
                    key={index}
                    className={tab.active ? 'btn btn-primary' : 'btn btn-secondary'}
                    onClick={() => props.onClick(tab.id)}
                    >
                    {tab.title}
                </button>
            ))
        }
        </div>
    </div>*/