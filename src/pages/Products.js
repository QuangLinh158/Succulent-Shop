import React,{useState, useEffect} from 'react'
import '../App.css';
import proService from './../services/proService';
import cateService from './../services/cateService';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Products = () => {
  //====================filter product by cate ===============
  const filterPro = async (id) =>{
    const listProduct = await proService.list();
    const result = listProduct.filter((pro) => {
      if(id !== 0) {
        return  pro.idCate === id;
      }
      else{
        return pro.idCate !== id;
      }
    });
    console.log(result);
    setProducts(result);
    // return result;
  };
  //================ getList ========================
  const [products, setProducts] = useState([]); //abc => def
  const loadData = () => {
    proService.list().then((res) => {
          setProducts(res);
      });
  };
  useEffect(() => {
      loadData();
      loadData1();
  }, []);
  //================ getList ========================
  const [cates, setCates] = useState([]);
  const loadData1 = () => {
    cateService.list().then((res) => {
          setCates(res);
      });
  };
  //====================  navigate =============================
  const navigate = useNavigate();
  const showDetails = (e,id) => {
    if(e) e.preventDefault();
    navigate(`/products/${id}`);
  }
  //=====================search & pagination============================
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({selected}) =>{
      setPageNumber(selected);
  }
  const [searchPro, setSearchPro] = useState('');
  const searchText = (event) => {
      setSearchPro(event.target.value);
  }
  let dataSearch = products.filter(item => {
      return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(searchPro.toString().toLowerCase())
          );
  });
  const displayProByCate = dataSearch.slice(pagesVisited, pagesVisited + productsPerPage)
  .map((pro,idx) => {
  return(
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
  });
  //=============================================
  
  return (
    <div>
      <div className='container'>
          <div className=' text-center title m-2'>
            <h1>Sản Phẩm Mới</h1>
            <hr style={{ height: 2 }}/>
          </div>
          <div className='text-center m-5'>
            <div className='row justify-content-between'>
              <div className='col'>
                <button type="button" 
                onClick={() => filterPro(0)} 
                className="btn btn-outline-success mx-1 my-2">Tất cả</button>
                {cates.map((cate, idx) => <button 
                  key={idx} 
                  type="button" 
                  className="btn btn-outline-success mx-1 my-2"
                  onClick={() => filterPro(cate.id)}
                  >
                    {cate.nameCate}
                  </button>)}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <div className="input-group container">
                  <input type="text" placeholder='Tìm kiếm...' 
                  className="form-control" 
                  onChange = {searchText.bind(this)}
                  value = {searchPro}
                  aria-label="Dollar amount (with dot and two decimal places)"/>
                  <span className="input-group-text" style={{backgroundColor:'green', border:'1px solid green'}}>
                    <i className="bi bi-search" style={{color:'white'}}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className='list row'>
              {displayProByCate}
          </div>
          <div className='my-3'>
          <ReactPaginate 
                        previousLabel={"Trước"}
                        nextLabel={"Sau"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
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

export default Products
