import React,{useState, useEffect} from 'react'; //rafce
import '../App.css';
import cateService from './../services/cateService';
import newsService from './../services/newsService';
const Home = () => {
  //================ getList ========================
  const [cates, setCates] = useState([]);
  const loadData = () => {
    cateService.list().then((res) => {
          setCates(res);
      });
  };
  useEffect(() => {
      loadData();
  }, []);
  //================ getList ========================
  const [news, setNews] = useState([]);
  const loadData1 = () => {
    newsService.list().then((res) => {
          setNews(res);
      });
  };
  useEffect(() => {
      loadData1();
  }, []);
  return (
    <div>
      <div className='container'>
        <div className='topHome'>
          <div className='row'>
            <div className=' col-lg-8 my-sm-5'>
              <h2 id='titleHome'> Chào mừng bạn đến<br/> với không gian mát mẻ ! </h2>
              <p id='contentHome' className='my-lg-3'>
              Các loại cây cảnh trong nhà không chỉ mang lại nguồn không khí trong lành,
              có lợi cho sức khỏe mà chúng còn có thể giúp bạn cải vận, đem đến vượng khí,
              may mắn và thành công trong cuộc sống.
              Những loại cây trồng trong nhà trong danh sách dưới đây, đều là những loại cây cảnh đẹp,
              dễ sống mà không cần ánh sáng quá nhiều. Ngoài ra chúng có khả năng thanh lọc không khí,
              cung cấp một nguồn Oxy khổng lồ. Đặc biệt, một số loại cây cảnh còn có tác dụng trong phong thủy 
              vô cùng hữu ích.
              </p>
              <button type="button" className="btn btn-success my-sm-3">Xem ngay <i className="bi bi-chevron-double-right"></i></button>
            </div>
            <div className=' col-lg-4 my-2 my-sm-5 bggradi'>
              <div className='box'>
                <div className='content'>
                  <img className=" img-fluid imgcircle " src='https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VjY3VsZW50fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center title'>
          <h1> <i className="bi bi-dash-lg"></i> Danh mục <i className="bi bi-dash-lg"></i></h1>
        </div>
        <div className='center'>
          <div className='row ' id='warpper'>
            {cates.map((cate, idx) => 
              <div className='col-sm-4 my-1 list-person' key={idx}>
                <img className=' img-fluid' src={cate.avatar} alt='' />
                <div className='name'>{cate.nameCate}</div>
              </div>
            )}
          </div>
        </div>
        <br/>
        <div className='text-center title'>
          <h1><i className="bi bi-dash-lg"></i>Tin tức<i className="bi bi-dash-lg"></i></h1>
        </div>
        <div className='center2 my-3'>
              {news.map((neww, idx) => 
                <div className='row' key={idx}>
                  <div className='col-sm-8'>
                    <div className=' title my-1'>
                      <h3>{neww.titleNews}</h3>
                      <p>
                        {neww.contentNews}
                      </p>
                      <div className=' text-end'>
                        <a href='/#' > Xem thêm <i className="bi bi-chevron-double-right"></i> </a>
                      </div>
                  </div>
              </div>
              <div className='col-sm-4 my-1'>
                <img className=' img-thumbnail' src={neww.imgNews} alt='' />
              </div>
                </div>
              )}
              
        </div>
        <div className='text-center title'>
          <h1><i className="bi bi-dash-lg"></i>Không gian<i className="bi bi-dash-lg"></i></h1>
        </div>
        <div className='center3 my-3'>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <img id='imgkgb' className=' img-fluid my-1' src='https://images.unsplash.com/photo-1512486651355-02f2abeb48b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1Y2N1bGVudHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
            <div className='col-sm-3'>
              <img className=' img-fluid my-1' src='https://images.unsplash.com/photo-1572017436980-94e258a8b72d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1Y2N1bGVudHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
              <img className=' img-fluid my-1 my-sm-4' src='https://images.unsplash.com/photo-1512486754243-f38ddb8e53b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1Y2N1bGVudHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
            <div className='col-sm-3'>
              <img className=' img-fluid my-1' src='https://images.unsplash.com/photo-1510845850921-b8f6e35f3c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1Y2N1bGVudHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
              <img className=' img-fluid my-1 my-sm-4' src='https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1Y2N1bGVudHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='blurrr'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4 my-sm-3'>
                    <h5>Hỗ trợ khách hàng</h5>
                    <div>
                      <ul>
                        <li>
                            Trung tâm trợ giúp
                        </li>
                        <li>
                            An toàn mua bán
                        </li>
                        <li>
                            Quy định nghiêm ngặt
                        </li>
                        <li>
                            Quy chế quyền riêng tư
                        </li>
                      </ul>
                    </div>
                </div>
                <div className='col-sm-4 my-sm-3'>
                  <h5>Địa chỉ</h5>
                  <div>
                      <ul>
                        <li>
                            Trường đại học Ngoại Ngữ - Tin Học TP.HCM
                        </li>
                        <li>
                            Di động: 092949248
                        </li>
                        <li>
                            Hotline: 0239902998
                        </li>
                      </ul>
                    </div>
                </div>
                <div className='col-sm-4 my-sm-3'>
                  <h5>Hợp tác</h5>
                  <div className='row'>
                    <i className="bi bi-facebook"> facebook</i>
                  </div>
                  <div className='row'>
                    <i className="bi bi-twitter"> twitter</i>
                  </div>
                  <div className='row'>
                    <i className="bi bi-youtube"> youtube</i>
                  </div>
                </div>
            </div>
            <div className='map '>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31357.24401795471!2d106.6500096!3d10.7610112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1651744775856!5m2!1svi!2s"></iframe>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
