import { useNavigate } from "react-router-dom";

const PtnHeader = () => {
  const navigate = useNavigate();

  const onClickMenu = (num) => {
    switch (num) {
      case 1:
        navigate("/partnermain");
        break;
      case 2:
        navigate("/partnermain/updateinfo");
        break;
      case 3:
        navigate("/partnermain/partnerreview");
        break;
      case 4:
        navigate("/service/notice");
        break;
      case 5:
        navigate("/service/faq");
        break;
      default:
    }
  };

  return (
    <nav>
      <ul className="menu">
        <li>
          <div className="m-title" onClick={() => onClickMenu(1)}>
            파트너페이지
          </div>
        </li>
        <li>
          <div className="m-title" onClick={() => onClickMenu(2)}>
            정보수정
          </div>
        </li>
        <li>
          <div className="m-title" onClick={() => onClickMenu(3)}>
            후기관리
          </div>
        </li>
        <li>
          <div className="m-title" onClick={() => onClickMenu(4)}>
            고객센터
          </div>
          <ul className="sub-menu">
            <li onClick={() => onClickMenu(4)}>공지사항</li>
            <li onClick={() => onClickMenu(5)}>FAQ</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default PtnHeader;
