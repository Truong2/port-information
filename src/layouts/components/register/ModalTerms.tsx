import { Button, Tab } from '@onesme/dxui'
import { Modal } from 'antd'

interface ModalTermsProps {
  showPolicy: boolean
  setShowPolicy: any
}

export default function ModalTerms({ showPolicy, setShowPolicy }: ModalTermsProps) {
  const policy = [
    { tab: 'Điều khoản', src: '/pdf/dieu_khoan_dang_ky_tai_khoan.pdf' },
    { tab: 'Chính sách bảo mật', src: '/pdf/chinh_sach_bao_mat.pdf' },
    { tab: 'Chính sách vận chuyển và giao nhận', src: '/pdf/chinh_sach_van_chuyen_va_giao_nhan.pdf' },
    { tab: 'Quy định thanh toán', src: '/pdf/quy_dinh_thanh_toan.pdf' },
    {
      tab: 'Chính sách bảo vệ dữ liệu cá nhân - NĐ13',
      src: '/pdf/chinh_sach_bao_ve_du_lieu_ca_nhan_cua_khach_hang.pdf'
    }
  ]

  return (
    <Modal
      visible={showPolicy}
      footer={<Button onClick={() => setShowPolicy()}>Đóng</Button>}
      onCancel={() => setShowPolicy()}
      title='Điều khoản sử dụng'
      width='90%'
      style={{ maxWidth: '1120px' }}
    >
      <Tab
        defaultActiveKey='0'
        items={policy.map((el, index) => ({
          key: index.toString(),
          label: el.tab,
          children: <embed src={el.src} title={el.tab} height='500px' width='100%' type='application/pdf' />
        }))}
      />
    </Modal>
  )
}
