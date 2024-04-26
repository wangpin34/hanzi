import { ArrowRightIcon } from '@radix-ui/react-icons'
import {
  AlertDialog,
  Box,
  Button,
  Flex,
  IconButton,
  TextArea,
} from '@radix-ui/themes'
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import Hanzi from './components/hanzi/row'
import { isChineseChar } from './utils/char'

function App() {
  const [input, setInput] = useState<string>('')
  const [hanzi, setHanzi] = useState<string>('')
  const [showAlertNotChinese, setShowAlertNotChinese] = useState(false)
  useEffect(() => {
    if (hanzi.split('').some((char) => !isChineseChar(char))) {
      setShowAlertNotChinese(true)
    }
  }, [hanzi])

  return (
    <div className='w-screen h-screen flex '>
      <div className='box-border w-full h-full max-h-full relative bg-slate-300 overflow-auto'>
        <Box
          id='editor'
          className={classnames(
            'w-full h-content pt-6 px-2 pb-4 transition-all flex flex-col gap-1 items-end sticky top-0 left-0 z-10 bg-slate-400 '
          )}
        >
          {/* <IconButton variant='ghost' className='self-start'>
            <ArrowLeftIcon />
          </IconButton> */}
          <TextArea
            placeholder='请输入汉字，例如：汉字'
            className='w-full'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            variant='ghost'
            size='4'
            onClick={() => setHanzi(input)}
            color='amber'
          >
            <ArrowRightIcon width={18} height={18} />
          </IconButton>
        </Box>
        <Box id='preview' className='w-full p-4 flex flex-col gap-4'>
          {hanzi.split('').map((char) => (
            <Hanzi key={char} hanzi={char} />
          ))}
        </Box>
        <AlertDialog.Root open={showAlertNotChinese}>
          <AlertDialog.Content maxWidth='450px'>
            <AlertDialog.Title>
              请输入汉字搜索笔顺，例如：“汉字”
            </AlertDialog.Title>

            <Flex gap='3' mt='4' justify='end'>
              <AlertDialog.Cancel>
                <Button
                  variant='soft'
                  color='gray'
                  onClick={() => setShowAlertNotChinese(false)}
                >
                  取消
                </Button>
              </AlertDialog.Cancel>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  )
}

export default App
