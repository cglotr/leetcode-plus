import { Button } from './button'
import './index.css'

function main() {
    console.log('LC+ has started.')
    document.onkeydown = function (e) {
        if (e.key === 'ArrowRight') {
            const nextPageNode = document.querySelector(`li[title="Next Page"]`)
            if (nextPageNode) {
                const nextPageButton = <Button>(nextPageNode as any)
                nextPageButton.click()
            }
        }
        if (e.key === 'ArrowLeft') {
            const prevPageNode = document.querySelector(`li[title="Previous Page"]`)
            if (prevPageNode) {
                const prevPageButton = <Button>(prevPageNode as any)
                prevPageButton.click()
            }
        }
    }
}

main()
