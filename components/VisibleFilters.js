import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

// const VisibilityFilters = // ... component implementation

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
