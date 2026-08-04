/**
 * VANE-GUARD-ORCHESTRATOR - Front-End Logic
 * Architecture: Multi-Vendor Telemetry Toggle & Level Filtering
 * Verified Lead Architect: Mr. Md Abul Hossain
 */

function switchVendor(vendor) {
  // Clear active states from all vendor panels
  document.querySelectorAll('.vendor-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Reset navigation tabs
  const tabIbm = document.getElementById('tab-ibm');
  const tabMs = document.getElementById('tab-ms');
  if (tabIbm) tabIbm.className = 'vendor-tab';
  if (tabMs) tabMs.className = 'vendor-tab';

  // Activate selected workspace pipeline
  if (vendor === 'ibm') {
    const panelIbm = document.getElementById('panel-ibm');
    if (panelIbm) panelIbm.classList.add('active');
    if (tabIbm) tabIbm.classList.add('active-ibm');
  } else if (vendor === 'ms') {
    const panelMs = document.getElementById('panel-ms');
    if (panelMs) panelMs.classList.add('active');
    if (tabMs) tabMs.classList.add('active-ms');
  }
}

function filterLevel(level, element, prefix) {
  // Select matching active panel string safely using backticks
  const parentPanel = document.getElementById(`panel-${prefix}`);
  if (!parentPanel) return;

  // Reset filtering button states within the active vendor scope
  parentPanel.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active', 'ms-theme');
  });
  
  // Apply distinct visual themes based on ecosystem type
  if (prefix === 'ms') {
    element.classList.add('active', 'ms-theme');
  } else {
    element.classList.add('active');
  }

  // Filter DOM rows matching selected classification criteria safely using backticks
  parentPanel.querySelectorAll(`.${prefix}-row`).forEach(row => {
    if (level === 'all' || row.getAttribute('data-level') === level) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });
} 

