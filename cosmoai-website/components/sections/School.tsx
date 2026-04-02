import { SCHOOL_MODULES } from '@/lib/data'
import styles from './School.module.css'

export default function School() {
  return (
    <section id="school" className={styles.section}>
      <div className="section-inner">
        <p className="section-label reveal">School Management System</p>
        <div className={styles.layout}>
          {/* Left */}
          <div>
            <h2 className="section-title reveal">Complete School ERP<br />— All in One Platform</h2>
            <p className={`section-desc reveal`} style={{ marginBottom: 0 }}>
              Our smart school management system transforms how schools operate — from daily attendance
              to fee payments, parent communication, and AI-powered teaching assistance.
            </p>
            <div className={`${styles.modules} reveal`}>
              {SCHOOL_MODULES.map((m, i) => (
                <div key={i} className={styles.chip}>
                  <div className={styles.chipIcon}>{m.icon}</div>
                  <div className={styles.chipName}>{m.name}</div>
                  <div className={styles.chipDesc}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className={`${styles.mockupWrap} reveal`}>
            <div className={styles.mockup}>
              <div className={styles.mockupBar}>
                <span className={`${styles.dot} ${styles.red}`}></span>
                <span className={`${styles.dot} ${styles.yellow}`}></span>
                <span className={`${styles.dot} ${styles.green}`}></span>
                <span className={styles.mockupTitle}>COSMOAI School Dashboard</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.statRow}>
                  {[['342','Students'],['96%','Attendance'],['Tk 2.4L','Collected']].map(([v,l],i)=>(
                    <div key={i} className={styles.statCard}>
                      <div className={styles.statVal}>{v}</div>
                      <div className={styles.statLbl}>{l}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.barChart}>
                  {[45,60,75,90,65,80,55].map((h,i) => (
                    <div
                      key={i}
                      className={`${styles.bar} ${i===3?styles.barActive:''}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <table className={styles.table}>
                  <thead>
                    <tr><th>Student</th><th>Class</th><th>Fee Status</th></tr>
                  </thead>
                  <tbody>
                    {[
                      ['Ayesha Rahman','Class 7','PAID','paid'],
                      ['Rafiq Hossain','Class 9','DUE','due'],
                      ['Nadia Islam','Class 5','PAID','paid'],
                      ['Tariq Ahmed','Class 10','PAID','paid'],
                    ].map(([name,cls,status,type],i)=>(
                      <tr key={i}>
                        <td>{name}</td><td>{cls}</td>
                        <td><span className={`${styles.badge} ${styles[type]}`}>{status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
