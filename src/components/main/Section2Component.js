import React from 'react';

function Section2Component ({notice, gallery, modalOpen}){

  

  const onClickModal=(e)=>{
    e.preventDefault();
    modalOpen();
  }

  return (
      <section id="section2">
          <div className="left board">
            <button className="notice-btn">공지사항</button>
            <div className="notice-box board-box">
              <div className="gap">
                <ul>

                  {
                    notice.map((item, idx)=>{
                      return (
                        idx===0?
                        <li key={idx}><a href="!#" onClick={onClickModal} title={item.제목} className='modal-btn'>{item.제목}</a><span>{item.날짜}</span></li>
                        :
                        <li key={idx}><a href="!#" title={item.제목}>{item.제목}</a><span>{item.날짜}</span></li>

                        )
                    })
                  }
                </ul>  
              </div>
            </div>
          </div>
          <div className="center board">
            <button className="gallery-btn" style={{color:'#cc1'}}>갤러리</button>
            <div className="gallery-box board-box">
          
              {
                gallery.map((item)=>{
                  return(
                    <a href="!#" title={item.제목} style={{ overflow:'hidden'}}><img style={{borderRadius:'8px'}} src={item.이미지} alt={item.제목}/></a>
                  )
                })
              }
              
            </div>
          </div>  
          <div className="right">
            <div className="banner">
              <div className='title'><h2>EVENT BANNER</h2></div>
              <div className="img-box">
                <a href="!#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
              </div>
            </div>
          </div>  
        </section>
  );
};


Section2Component.defaultProps = {
  notice: [
    {제목:"Green 복지재단 공지사항1", 날짜:"2020.11.23"},
    {제목:"Green 복지재단 공지사항2", 날짜:"2020.11.23"},
    {제목:"Green 복지재단 공지사항3", 날짜:"2020.11.23"},
    {제목:"Green 복지재단 공지사항4", 날짜:"2020.11.23"}
  ],
  gallery: [
    {제목: "icon1", 이미지:"./images/icon1.png"},
    {제목: "icon2", 이미지:"./images/icon2.png"},
    {제목: "icon3", 이미지:"./images/icon3.png"}
  ]
}

export default Section2Component;