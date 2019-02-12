
export const snapshotsToArray = snapshots => snapshots.reduce((acc, snap) => (
  [...acc, {...snap.data(), id: snap.id }]
), [])