import { useEffect, useMemo, useState } from 'react'
import Dexie from 'dexie'

type Entry = { id?: number; pageId: string; fieldId: string; value: string }

const db = new Dexie('planner')
db.version(1).stores({ entries: '++id, pageId, fieldId' })
const entries = db.table<Entry, number>('entries')

async function saveEntry(pageId: string, fieldId: string, value: string) {
  const existing = await entries.where({ pageId, fieldId }).first()
  if (existing) await entries.update(existing.id!, { value })
  else await entries.add({ pageId, fieldId, value })
}

async function loadEntry(pageId: string, fieldId: string) {
  const existing = await entries.where({ pageId, fieldId }).first()
  return existing?.value ?? ''
}

function useDebounce<T>(value: T, delay = 500) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}

type Props = { pageId: string; fieldId: string; label: string }

export default function TextField({ pageId, fieldId, label }: Props) {
  const [value, setValue] = useState('')
  const debounced = useDebounce(value, 500)
  const key = useMemo(() => `${pageId}:${fieldId}`, [pageId, fieldId])

  useEffect(() => {
    loadEntry(pageId, fieldId).then(setValue)
  }, [key])

  useEffect(() => {
    saveEntry(pageId, fieldId, debounced)
  }, [debounced, pageId, fieldId])

  return (
    <label style={{ display: 'grid', gap: 6 }}>
      <span style={{ fontSize: 12, color: '#555' }}>{label}</span>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        style={{ padding: 8, border: '1px solid #ccc', borderRadius: 6 }}
        placeholder="Type here..."
      />
    </label>
  )
}
