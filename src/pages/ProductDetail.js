import React,{useEffect, useState} from 'react';
import proService from './../services/proService';
import {  useParams,useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState({
        id: 0,
        namePro: "",
        priceSell: 0,
        describePro: "",
        imgPro: "",
        quantityPro: 0,
        idCate: 0,
        dateAdd: "",
        priceAdd: 0,
    });
    const param = useParams();
    useEffect(() => {
        proService.get(param.id).then((res) => {
            setProduct(res);
        });
        loadData();
    },[param.id]);
    //=======================================================
    const [products, setProducts] = useState([]); //abc => def
    const loadData = () => {
      proService.list().then((res) => {
          setProducts(res);
        });
      };
      //=================================================
  const navigate = useNavigate();
  const showDetails = (e,id) => {
    if(e) e.preventDefault();
    navigate(`/products/${id}`);
  }
      const displayProByCate = products.map((pro, idx) => 
    
      <div className='col-lg-3 col-6 my-2 ' key={idx}>
  <div className='card p-2 overflow-hidden'>
    <img className='img-fluid' onClick={(e) => showDetails(e, pro.id)} src={pro.imgPro} alt='' />
    <h4 className='namePro my-3' style={{fontFamily:'cursive'}}
      onClick={(e) => showDetails(e, pro.id)}
    >{pro.namePro}</h4>
    <div className='row'>
      <div className='col'>
        <h6 style={{fontFamily:'cursive'}}>{pro.priceSell} vnd</h6>
      </div>
      <div className='col-auto'>
        <p style={{fontFamily:'cursive'}} >Còn hàng</p>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <button type="button" className="btn btn-success">Mua ngay</button>
      </div>
      <div className='col-auto' id='iconCart'>
        <i style={{fontSize:25, color:'gray'}} className="bi bi-heart-fill"></i>
      </div>
    </div>
    </div>
</div>
);
    //=======================================================
    const [count, setCount] = useState(null);
    const [error, setError] = useState(null);
    function handlePlus() {
      if(count === null || count === ""){
        setCount(1);
      } else {
        setCount(count + 1);
        setError(null);
      }
    };
  
    function handleMinus() {
      if (count > 1) {
        setCount(count - 1);
        setError(null);
      } else {
        setError("Please Enter a Valid Number");
      }
    };
    function handleValueChange(e) {
      e.preventDefault();
      const re = /^[0-9\b]+$/;
      if (e.target.value === "" || re.test(e.target.value)) {
        const x = Number(e.target.value);
        setCount(x);
        setError("Qty updated");
      } else {
        setError("Your input is not valid");
      }
    };
  return (
    <div>
      
      <div className='container'>
        <div className='row my-sm-4 card-body'>
          
            <div className='col-lg-6 '>
                <img src={product.imgPro} alt=""  className='img-fluid ' />
            </div>
            <div className='col-lg-6 my-md-5'>
              <div className='proDetail'>
                <h1>{product.namePro}</h1>
                <h3>{product.priceSell} vnd</h3>
                <p>{product.describePro}</p>
                <p>
                  Đã từ lâu, cây sen đá được mệnh danh là đại sứ của tình yêu – một tình yêu bền chặt và thủy chung theo năm tháng.
                  Cây sen đá nhỏ nhắn và dễ thương thường được chủ nhân bày trí ở bàn học, bàn làm việc hoặc những bức tường in hằn
                  dấu vết thời gian.
                  Cũng thuộc top cây cảnh dễ trồng dễ chăm sóc, cây sen đá khá là phù hợp với dân văn phòng công sở – những người bận
                  rộn, không có nhiều thời gian rãnh rỗi. Bạn có thể trồng sen đá vào những chậu sứ nhỏ để trưng trong phòng, quán cà
                  phê, phòng sách,…
                </p>
              </div>
              <div className='row'>
                <div className='col-auto'>
                  <button type='button' onClick={handleMinus} className='btn btn-danger'><i className="bi bi-dash-lg"></i></button>
                </div>
                <div className='col-auto my-1'>
                  <input
                  style={{width:40}}
                  type="text"
                  min="1"
                  defaultValue={count}
                  onClick={() => setCount("")}
                  onChange={handleValueChange}
                  disabled
                  />
                </div>
                <div className='col-auto'>
                  <button type='button' onClick={handlePlus} className='btn btn-primary'><i className="bi bi-plus"></i></button>
                </div>
              </div>
              <div className='row my-3'>
                <div className='col-auto'>
                  <button type="button" className="btn btn-success">Mua ngay</button>
                </div>
                <div className='col-auto'>
                  <button type="button" className="btn btn-warning">Thêm vào giỏ hàng</button>
                </div>
              </div>
            </div>
            
            <div className='my-2'>
              <h3 className='goiy'>Gợi ý</h3>
              <hr className='my-1' style={{ height: 2 }}/>
              <div className="wrapper">
                  {displayProByCate}
            </div>
            </div>
        </div>
      </div>
      <div className='footer mt-5'>
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

export default ProductDetail;
