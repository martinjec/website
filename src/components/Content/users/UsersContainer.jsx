import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
  followUserTC,
  unfollowUserTC,
} from "../../../redux/userReducer";
import Users from "./Users";
import Preloader from "./../../common/Preloader/Preloader.jsx";
import Paginator from "../../common/helpers/Paginator";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingProgress,
} from "../../../redux/userSelector";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize,
    );
  }
  onPageChange = (pageNuber) => {
    this.props.setCurrentPage(pageNuber);
    this.props.toggleIsFetching(true);
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingBtnStatus={this.props.followingBtnStatus}
          followUserTC={this.props.followUserTC}
          unfollowUserTC={this.props.unfollowUserTC}
          Paginator={this.props.Paginator}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingBtnStatus: getFollowingProgress(state),
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
  followUserTC,
  unfollowUserTC,
  Paginator,
})(UsersComponent);
