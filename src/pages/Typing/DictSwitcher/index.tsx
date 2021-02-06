import _ from 'lodash'

export type DictSwitcherPropsType = {
  dictName: string
  chapter: number
  chapterListLength: number
  changeChapter: (index: number) => void
}

const DictSwitcher: React.FC<DictSwitcherPropsType> = ({ chapter, chapterListLength, changeChapter }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <div>
        <select
          value={chapter}
          onChange={(e) => {
            changeChapter(parseInt(e.target.value))
            e.target.blur()
          }}
        >
          {_.range(chapterListLength).map((i) => {
            return (
              <option value={i} key={i}>
                Chap. {i + 1}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default DictSwitcher
