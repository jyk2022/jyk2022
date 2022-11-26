import CustomButton from "./CustomButton";

function Users(props) {
  return (
    <div className="squareStyle">
      {props.user.age} - {props.user.name}
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
}
export default Users;
