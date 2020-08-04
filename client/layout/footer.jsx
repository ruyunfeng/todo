import '../assets/less/footer.less'
export default {
  data () {
    return {
      author: 'ryf'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>
                    written by {this.author}
        </span>
      </div>
    )
  }
}
