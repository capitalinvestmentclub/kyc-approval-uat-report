const report = {
  cutoff: '2026-09-12 deployed Chrome campaign',
  sizes: ['360×800','390×844','768×1024','1024×768','1280×800','1440×900'],
  scenarios: [
    [1,'Employee authentication and session boundaries','PASS · Approver authenticated through /kyc-login and reached the protected dashboard.','None for scoped Chrome run.','PASS'],
    [2,'Queue status counts, search and pagination','FAIL · Status queues rendered, but mobile Review was off-screen.','Repair mobile action reachability.',['FAIL','FAIL','PASS','PASS','PASS','PASS']],
    [3,'Assignment overview and dashboard metrics','PASS · Activity and queue metrics rendered and updated after transition.','None for scoped Chrome run.','PASS'],
    [4,'Submitted facts and individual evidence','FAIL · Facts rendered; Passport PDF remained black.','Restore readable document rendering.','FAIL'],
    [5,'Sensitive reveal reasons and audit','PASS · Six reasons rendered and Open stayed disabled until selection.','Audit-log back-office reconciliation is outside UI-only evidence.','PASS'],
    [6,'Document preview failure and owner isolation','FAIL · Authorized required Passport remained unreadable.','Fix preview and retest owner isolation with a second fixture.','FAIL'],
    [7,'Field decisions, comments and draft persistence','FAIL · Completed record exposed enabled mutation controls.','Make terminal records immutable.','FAIL'],
    [8,'Professional qualifications and optional evidence','PASS · Professional tab and not-applicable states rendered coherently.','None for available fixture.','PASS'],
    [9,'Financial identifiers and declarations','PASS · Masked identifiers, evidence rows and declarations rendered.','None for available fixture.','PASS'],
    [10,'Referee response and refresh lifecycle','BLOCKED · No controlled referee mailbox lifecycle was available.','Provide controlled mailbox and response fixture.','BLOCKED'],
    [11,'Email verification resend and proof of control','PASS · Approval was rejected with a clear unverified-email message.','None for negative branch.','PASS'],
    [12,'Concurrent review and stale-record protection','BLOCKED · No second independently authenticated approver fixture was available.','Provide independent employee profile and disposable case.','BLOCKED'],
    [13,'Network interruption and resumable work','BLOCKED · Safe network interruption control was unavailable.','Provide controlled offline/slow-network harness.','BLOCKED'],
    [14,'Keyboard, screen reader and responsive workbench','FAIL · Table actions clipped and correction filters lacked names.','Repair responsive tables and accessible labels.',['FAIL','FAIL','FAIL','FAIL','PASS','PASS']],
    [15,'Reviewer handoff and independent inspection','PASS · Reviewer-completed record appeared in Approver In Progress with four tabs.','None for available handoff.','PASS'],
    [16,'Approve individual and verify downstream gates','FAIL · Email gate worked, but unreadable evidence prevented safe approval.','Fix preview and run successful approval/downstream check.','FAIL'],
    [17,'Return to reviewer reason validation','FAIL · Whitespace-only reason was accepted and moved case to Queried.','Trim and reject whitespace-only reasons.','FAIL'],
    [18,'Return versus applicant rejection separation','PASS · Dialog and queue transition matched reviewer-return semantics.','None for observed transition.','PASS'],
    [19,'Approval completeness and evidence guardrails','FAIL · Approval remained available although required evidence could not be read.','Require processable evidence before approval.','FAIL'],
    [20,'Completed and queried record immutability','FAIL · Approved record had enabled mutation controls; terminal correction action was inert.','Enforce read-only terminal views.','FAIL'],
    [21,'Current validity, reverification and expiry','BLOCKED · No controlled expiring fixture was available.','Provide dated reverification fixture.','BLOCKED'],
    [22,'Corporate independent approval','BLOCKED · Corporate queue reported no records waiting.','Provide approver-owned corporate fixture.','BLOCKED'],
    [23,'Corporate approval, rejection and recovery','BLOCKED · No corporate decision fixture was available.','Provide disposable corporate fixtures.','BLOCKED'],
    [24,'Corporate document reason and ownership audit','BLOCKED · No corporate document record was available.','Provide corporate evidence fixture.','BLOCKED'],
    [25,'AIR queue search, filters and evidence','FAIL · Search/filters worked; View was off-screen through 1024.','Repair AIR responsive action access.',['FAIL','FAIL','FAIL','FAIL','PASS','PASS']],
    [26,'AIR approve and withdrawal release','FAIL · Incomplete AIR enabled Mark as Verified after comment entry.','Gate verification on documents, facts, consent and validation.','FAIL'],
    [27,'AIR reject and corrective response','BLOCKED · No controlled owner response profile was available.','Provide disposable owner response fixture.','BLOCKED'],
    [28,'Correction case claim, query and member response','BLOCKED · Only terminal rejected correction existed; Review request was inert.','Provide actionable submitted case.','BLOCKED'],
    [29,'Correction case resolution and release','BLOCKED · No in-review correction case was available.','Provide claimable resolution fixture.','BLOCKED'],
    [30,'Full approval, return, appeal and reverification','BLOCKED · Multi-role fixtures and mailbox lifecycle unavailable.','Provide end-to-end disposable identities and mailboxes.','BLOCKED']
  ],
  findings: [
    {id:'KYCA-F001',severity:'Critical',scenario:'KYCA-004 / KYCA-006 / KYCA-016 / KYCA-019',area:'Document approval',title:'Required passport PDF is black and unreadable at all six Chrome sizes',steps:'Open the active synthetic individual, select Preview Passport, choose Verify identity information, and open the protected document at each viewport.',description:'The authorized PDF frame rendered black at 360×800, 390×844, 768×1024, 1024×768, 1280×800 and 1440×900.',expected:'Approvers must be able to read required identity evidence before approving a person.',evidenceStatus:'Observed defect'},
    {id:'KYCA-F002',severity:'Critical',scenario:'KYCA-026',area:'AIR completeness',title:'Incomplete AIR can be marked verified',steps:'Open an AIR showing no documents, missing registration name and RC number, no board consent and auto-validation Not run; enter only a reviewer comment.',description:'Both Reject and Mark as Verified / Completed became enabled after entering a comment.',expected:'Verification must remain blocked until all required evidence, facts, consent and validation checks are complete.',evidenceStatus:'Observed defect'},
    {id:'KYCA-F003',severity:'High',scenario:'KYCA-017',area:'Return validation',title:'Whitespace-only return reason is accepted',steps:'Open Return to reviewer, enter spaces only, and submit.',description:'The application moved from In Progress to Queried and displayed an empty reason.',expected:'Trim input and reject blank or whitespace-only compliance reasons.',evidenceStatus:'Observed defect'},
    {id:'KYCA-F004',severity:'High',scenario:'KYCA-007 / KYCA-020',area:'Terminal immutability',title:'Completed approved records expose mutation controls',steps:'Open a Completed approved individual record and inspect evidence and comment controls.',description:'Accept, Query, Reject, verification and Save comment controls remained enabled on the terminal record.',expected:'Completed approval records must be immutable except through an explicit audited correction workflow.',evidenceStatus:'Observed defect'},
    {id:'KYCA-F005',severity:'High',scenario:'KYCA-002 / KYCA-014',area:'Individual responsive queue',title:'Individual Review action is off-screen on mobile',steps:'Open Pending at 360×800 and 390×844 and inspect the first queue row.',description:'The Review action began around x=601 while the usable widths were 345 and 375 pixels.',expected:'The primary queue action must remain visible and reachable without hidden horizontal navigation.',evidenceStatus:'Observed defect'},
    {id:'KYCA-F006',severity:'High',scenario:'KYCA-014 / KYCA-025',area:'AIR responsive queue',title:'AIR View action is off-screen through 1024 pixels',steps:'Open AIR at each viewport and inspect the first row action.',description:'View was outside the visible viewport at 360, 390, 768 and 1024 widths; it became visible at 1280 and 1440.',expected:'AIR evidence and decision entry must be reachable at every supported Chrome width.',evidenceStatus:'Observed defect'},
    {id:'KYCA-F007',severity:'Medium',scenario:'KYCA-014 / KYCA-028',area:'Corrections accessibility',title:'Correction filters are unnamed and terminal Review request is inert',steps:'Open Corrections & appeals, inspect the Status, Type and Ownership controls, then activate Review request on the rejected case.',description:'All three custom filter buttons had no accessible name, and Review request produced no visible detail or navigation.',expected:'Filters need unique accessible names and visible record actions must open a useful terminal detail.',evidenceStatus:'Observed defect'}
  ],
  gaps: [
    ['Controlled mailboxes','KYCA-010, KYCA-027, KYCA-030','No controlled referee/owner mailboxes were available for response and deep-link proof.'],
    ['Independent employee context','KYCA-012','A second separately authenticated approver fixture was unavailable for concurrency.'],
    ['Corporate fixtures','KYCA-022–024','The deployed Corporate queue explicitly reported no organization records waiting.'],
    ['Lifecycle fixtures','KYCA-021, KYCA-028–030','No expiring, actionable correction/appeal or end-to-end disposable fixture was available.'],
    ['Network harness','KYCA-013','Safe Chrome offline/slow-network controls were unavailable in this controlled session.'],
    ['Accessibility automation','Scoped run','Axe was unavailable; semantic inspection still found unnamed correction filters.']
  ]
};
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.PR_REVIEW_DATA={meta:{commit:'08af53f6',generatedAt:'2026-09-12T06:45:00Z',checkpoint:report.cutoff,url:'https://github.com/capitalinvestmentclub/kyc-approval-uat-report'},findings:report.findings.map(f=>({...f,type:'Defect',status:'Open',visuals:[]}))};
document.getElementById('scenarios').innerHTML=report.scenarios.map(([n,title,done,todo,status])=>{const cells=Array.isArray(status)?status:report.sizes.map(()=>status);const overall=cells.includes('FAIL')?'FAIL':cells.includes('BLOCKED')?'BLOCKED':'PASS';return `<tr id="scenario-${n}"><td>KYCA-${String(n).padStart(3,'0')}<br>${escapeText(title)}<br><span class="history">${escapeText(overall)}</span></td><td>${escapeText(done)}</td><td>${escapeText(todo)}</td><td><div class="cells">${report.sizes.map((size,index)=>`<span>${size} · ${escapeText(cells[index])}</span>`).join('')}</div></td></tr>`;}).join('');
document.getElementById('gaps').innerHTML=report.gaps.map(([title,scope,body])=>`<article><h3>${escapeText(title)}</h3><small>${escapeText(scope)}</small><p>${escapeText(body)}</p></article>`).join('');
