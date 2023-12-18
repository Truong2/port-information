// // components/UploadAvatar.tsx
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
// import styled from '@emotion/styled'
// import { message, Select, Upload } from 'antd'
// import 'antd/es/modal/style'
// import 'antd/es/slider/style'

// const { Option } = Select

// interface UploadAvatarProps {
//   value?: any
//   textUrl?: boolean
//   disabled?: boolean
//   onChange?: (value: any) => void
//   circle?: boolean
//   isSme?: boolean
//   isEdit?: boolean
// }

// const UploadCircle = styled(Upload)`
//   .ant-upload {
//     width: 10.625rem;
//     height: 10.625rem;
//     border-radius: ${(props: { circle?: boolean }) => (props.circle ? '9999px' : '')};
//   }
// `

// const UploadAvatar: React.FC<UploadAvatarProps> = ({
//   value = {},
//   textUrl,
//   disabled,
//   onChange,
//   circle,
//   isSme,
//   isEdit = true,
//   ...props
// }) => {
//   // const insertImageAva = useMutation(UploadImage.insertUserImage)
//   const isCustomer = location.pathname.includes('customer-manager')
//   const API_ROOT = 'localhost:3000'
//   const handleSrcImg = () => {
//     let srcImg
//     if (isCustomer) {
//       srcImg = `${API_ROOT}${value?.filePath}`
//     } else {
//       srcImg = `${value?.filePath}`
//     }

//     return srcImg
//   }

//   const validateImg = (file: any) => {
//     const isJpgOrPng =
//       file.type === 'image/jpeg' ||
//       file.type === 'image/png' ||
//       file.type === 'image/jpg' ||
//       file.type === 'image/x-icon' ||
//       file.type === 'image/jfif'
//     if (!isJpgOrPng) {
//       message.error('Định dạng file không được hỗ trợ.')

//       return false
//     }
//     const isLt2M = file.size / 1024 / 1024 < 10
//     if (!isLt2M) {
//       message.error('File không được quá 10MB')

//       return false
//     }

//     return true
//   }

//   const handleInsertImage = async ({ file, onSuccess, onError }: any) => {
//     try {
//       if (validateImg(file)) {
//         const formData = new FormData()
//         const formClear = {}

//         onChange?.(formClear)
//         formData.append('files', file)
//         formData.append('fileSize', file.size)
//         const res = await insertImageAva.mutateAsync(formData)
//         onChange?.(res)
//         onSuccess()
//       }
//     } catch (e) {
//       onError()
//     }
//   }

//   const uploadButton = <div>{insertImageAva.isLoading ? <LoadingOutlined /> : <PlusOutlined />}</div>

//   const handleBeforeUpload = (file: any) => validateImg(file)

//   return (
//     <>
//       <UploadCircle
//         className='avatar-uploader mx-auto text-center relative z-10'
//         showUploadList={false}
//         customRequest={handleInsertImage}
//         beforeUpload={handleBeforeUpload}
//         disabled={disabled}
//         circle={circle}
//         {...props}
//       >
//         {value?.filePath ? (
//           <img
//             className='mx-auto text-center  object-cover  w-full h-full'
//             src={handleSrcImg()}
//             alt='avatar'
//             style={
//               circle
//                 ? {
//                     borderRadius: '100%'
//                   }
//                 : {}
//             }
//           />
//         ) : (
//           uploadButton
//         )}
//       </UploadCircle>
//       <br />
//       {isSme && isEdit && <p className='text-center text-sm text-primary font-medium'>Thay đổi ảnh đại diện</p>}
//       {textUrl && (
//         <Upload
//           className='mr-2'
//           showUploadList={false}
//           customRequest={handleInsertImage}
//           beforeUpload={handleBeforeUpload}
//           disabled={disabled}
//           {...props}
//         >
//           <div className='justify-between flex w-full'>
//             <div className='text-center text-sm text-primary font-medium'>Thay đổi ảnh đại diện</div>
//           </div>
//         </Upload>
//       )}
//     </>
//   )
// }

// export default UploadAvatar
