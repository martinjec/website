import React, { PureComponent } from "react";

class ProfileStatus_old extends PureComponent {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.props;
  }
  activatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updUserStatus(this.state.userStatus);
  };

  onStatusChange = (e) => {
    this.setState({
      userStatus: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        userStatus: this.props.userStatus,
      });
    }
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode ? (
            <div>
              <span onClick={this.activatedEditMode}>
                {this.props.userStatus
                  ? this.props.userStatus
                  : "There is no status yet"}
              </span>
            </div>
          ) : (
            <div>
              <input
                onChange={this.onStatusChange}
                onBlur={this.deActivatedEditMode}
                autoFocus={true}
                value={this.state.userStatus}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus_old;
