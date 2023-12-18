import { Button } from '@onesme/dxui'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ContentProps {
  title: string
  btnName?: string
  icon?: ReactNode
  iconColor: string
  children: ReactNode
}

const Title = styled.div`
  color: var(--neutral-10, #3c4048);
  font-family: Inter, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`
const ContentStyled = styled.div`
  background-color: white;
  height: calc(100vh - 140px);
  overflow: auto;
`

const Content: React.FC<ContentProps> = (props: ContentProps) => {
  const { title, btnName = '', icon, iconColor, children } = props

  return (
    <>
      <ContentStyled className='rounded-2xl'>
        <div className='px-6 py-4 flex flex-row items-center justify-between mb-6 border-b border-solid border-neutral-200'>
          <Title>{title}</Title>
          <div>
            <Button leftIcon={icon} iconColor={iconColor} type={'primary-normal'} size={'large'}>
              {btnName}
            </Button>
          </div>
        </div>
        <div className='p-6'>{children}</div>
      </ContentStyled>
    </>
  )
}

export default Content
