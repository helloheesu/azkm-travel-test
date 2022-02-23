interface Props {
  onClose: () => void;
  closeText?: string;
  children?: React.ReactNode;
}

const Modal = ({ children, onClose, closeText = '닫기' }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2em',
      }}
    >
      <div
        style={{
          backgroundColor: '#fffeea',
          border: '4px solid #4f3526',
          borderRadius: '14px',
          height: '100%',
          width: '100%',
        }}
        className="fix-and-stretch-aligner"
      >
        <div className="stretch">{children}</div>
        <div
          style={{
            padding: '2em',
          }}
        >
          <div className="button image-background content-container">
            <button
              onClick={onClose}
              style={{
                fontSize: 'inherit',
              }}
            >
              {closeText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
