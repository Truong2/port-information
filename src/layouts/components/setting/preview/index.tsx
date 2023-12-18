import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  height: auto;
  background-color: #ffffff;
`

const Logo = styled.img`
  width: 136px;
  height: 136px;
  object-fit: cover;
  margin: 8px;
`

const UploadButton = styled.button`
  background-color: var(--neutral-2-light-stroke, #eaecef);
  color: var(--basic-white, #fff);
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px;
`

const Preview = () => {
  const [logoUrls, setLogoUrls] = useState<string[]>([])
  const [showIncorrectFileTypeToast, setShowIncorrectFileTypeToast] = useState(false)

  const onDrop = (acceptedFiles: File[]) => {
    const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'))

    if (imageFiles.length !== acceptedFiles.length) {
      setShowIncorrectFileTypeToast(true)
    }

    const newUrls = imageFiles.map(file => URL.createObjectURL(file))
    setLogoUrls(prevState => [...newUrls, ...prevState])
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.png']
    },
    onDrop,
    multiple: true
  })

  useEffect(() => {
    const savedLogoUrls = localStorage.getItem('logoUrls')
    if (savedLogoUrls) {
      setLogoUrls(JSON.parse(savedLogoUrls))
    }
  }, [])

  useEffect(() => {
    if (showIncorrectFileTypeToast) {
      toast.error('Only image files are allowed.')
      setShowIncorrectFileTypeToast(false)
    }

    localStorage.setItem('logoUrls', JSON.stringify(logoUrls))
  }, [showIncorrectFileTypeToast, logoUrls])

  return (
    <PreviewContainer>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadButton>Upload Logos</UploadButton>
      </div>
      {logoUrls.map((url, idx) => (
        <Logo key={idx} src={url} alt={`Company Logo ${idx}`} />
      ))}
    </PreviewContainer>
  )
}

export default Preview
