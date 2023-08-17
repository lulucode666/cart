import React, { useState } from 'react'
import './about.css'
import OtherCat from './OtherCat'

const About = () => {
  const video1 = './images/躲貓貓.mp4'
  const video2 = './images/花生報報摸.mp4'
  const [cats, setCats] = useState(OtherCat)



  return (
    <div className='wrapper2'>
      <div className='container' style={{ minHeight: '100vh' }}>
        <div className='row'>
          <h1 className='title2'>與花生の相遇</h1>
          <div className='col-sm-12 col-md-6'>
            <h5 className='text-warning'><b>
              厭世花生被厭世少女帶了回家，
              <br />
              開啟了花生甜蜜又厭世的時光...一切的起源...
            </b></h5>
            <video src={video1} style={{ maxWidth: '100%' }} autoPlay controls muted />
          </div>
          <div className='col-sm-12 col-md-6'>
            <p className='txt'>
              &emsp;&emsp;2017年9月28號，細雨濛濛壟罩著南投，因心事重重而堅持去體育場散步，在一片喧譁的寂靜中發現了特別的存在 —— 花生。
              <br />
              <br />
              &emsp;&emsp;本來只是朋友的一個念頭，喜愛貓咪的她想把貓咪帶回家。然而，命運的安排，讓我們遇見了花生，遇見了牠求助的眼神。
              而後朋友帶回家後，她的室友因貓毛引發嚴重的過敏而無法繼續照顧牠，如此便無辜地又可能要回到孤單挨餓的野外。
              那時一見到牠搞笑的臉孔，被牠厭世的神情深深感同身受，於是我堅決要給牠一個家。
              <br />
              <br />
              &emsp;&emsp;即便我知道自己也有嚴重的貓毛過敏，但在花生面前，這一切都變得微不足道。因為我們知道，牠是那麼真摯地需要愛與關懷，
              無法想像牠孤單地度過每一天，像一顆迷失的星，越來越覺得貓生無望，甚至對地球、對人類感到無比失望。這樣是不行的！
              <br />
            </p>
          </div>

        </div>
        {/* <p>
        <br /> 
        &emsp;&emsp;親人的花生很快就融入了我們，並開始展現出他聰明又獨特的個性，牠帶給我們的歡笑和療癒感是無可言喻的。
        牠用無聲的語言告訴我們，當我們愛惜牠的時候，牠用更美好的愛回饋給我們並成為難忘的回憶。
        <br />
        &emsp;&emsp;我們的生活因著花生而更加豐富，我們的世界因著花生而更加有色彩。
        我們的家變得更加溫馨，因為我們不再是孤單的旅者，而是成為花生的家人。
        <br />
        &emsp;&emsp;對於我們來說，花生是一個奇蹟，是命運的禮物。我們深深感謝這個特別的相遇，
        讓我們學會了愛，學會了關懷，學會了成為更好的人。
        <br />
        花生，是我們生命中最美麗的一道風景，是厭世時展開笑顏的理由。
        <br />
        謝謝花生，讓我們的生命因你而更加精彩。</p>
      <video src={video2} style={{ maxWidth: '100%' }} autoPlay controls muted /> */}

        <br />
        <div>
          <div class="row m-3">
            <div class="col text-center">
              <h1>還有浪浪需要你</h1>
            </div>
          </div>
          <div class="row d-flex align-items-center">
            <div class="col-1 d-flex align-items-center justify-content-center">
            </div>
            <div class="col-12 ">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item1 active">
                    <div className="row">
                      <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=860&q=80')" }} class="col-12 col-md d-flex align-items-center justify-content-center card-zoom">
                      </div>
                      <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')" }} class="col-12 col-md d-flex align-items-center justify-content-center card-zoom">
                        <h5 className="text-white">{cats.name}</h5>
                      </div>
                      <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80')" }} class="col-12 col-md d-flex align-items-center justify-content-center card-zoom">
                        <h5 className="text-white">{cats.name}</h5>
                      </div>
                      <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')" }} class="col-12 col-md d-flex align-items-center justify-content-center card-zoom">
                        <h5 className="text-white">{cats.name}</h5>
                      </div>
                      <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')" }} class="col-12 col-md d-flex align-items-center justify-content-center card-zoom">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default About