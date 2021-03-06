Component({
  props: {
    className: '',
    show: false,
    position: 'bottom',
    mask: true,
    animation: true,
  },
  methods: {
    onMaskTap() {
      const { onClose } = this.props;

      if (onClose) {
        onClose();
      }
    },
  },
});
