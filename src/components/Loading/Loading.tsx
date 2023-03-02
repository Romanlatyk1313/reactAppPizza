import style from './Loading.module.scss'

export const Loading: React.FC = () => {
    return (
        <div className={style.center}>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
  <div className={style.wave}></div>
</div>
    )
}