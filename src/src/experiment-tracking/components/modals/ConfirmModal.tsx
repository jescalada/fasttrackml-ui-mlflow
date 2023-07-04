import React, { Component } from 'react';
import { Modal } from '@databricks/design-system';

type Props = {
  isOpen: boolean;
  handleSubmit: (...args: any[]) => any;
  onClose: (...args: any[]) => any;
  title: React.ReactNode;
  helpText: React.ReactNode;
  confirmButtonText: React.ReactNode;
};

type State = any;

export class ConfirmModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onRequestCloseHandler = this.onRequestCloseHandler.bind(this);
    this.handleSubmitWrapper = this.handleSubmitWrapper.bind(this);
  }

  state = {
    isSubmitting: false,
  };

  onRequestCloseHandler() {
    if (!this.state.isSubmitting) {
      this.props.onClose();
    }
  }

  handleSubmitWrapper() {
    this.setState({ isSubmitting: true });
    return this.props.handleSubmit().finally(() => {
      this.props.onClose();
      this.setState({ isSubmitting: false });
    });
  }

  render() {
    return (
      <Modal
        data-testid='confirm-modal'
        title={this.props.title}
        visible={this.props.isOpen}
        onOk={this.handleSubmitWrapper}
        okText={this.props.confirmButtonText}
        confirmLoading={this.state.isSubmitting}
        onCancel={this.onRequestCloseHandler}
        // @ts-expect-error TS(2322): Type '{ children: Element; "data-testid": string; ... Remove this comment to see the full error message
        centered
      >
        <div className='modal-explanatory-text'>{this.props.helpText}</div>
      </Modal>
    );
  }
}
