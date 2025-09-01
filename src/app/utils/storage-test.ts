/**
 * localStorage Test and Verification
 * 
 * This script tests localStorage functionality and verifies that
 * cross-navigation data is properly stored and accessible.
 */

export function testLocalStorage(): boolean {
  console.log('🧪 Testing localStorage functionality...');
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    console.log('ℹ️ localStorage not available (SSR environment or unsupported browser)');
    return false;
  }
  
  try {
    // Test 1: Basic localStorage availability
    if (typeof Storage === 'undefined') {
      console.error('❌ localStorage not supported by this browser');
      return false;
    }
    console.log('✅ localStorage is supported');

    // Test 2: Basic read/write test
    const testKey = 'test-storage-' + Date.now();
    const testValue = 'test-value-' + Math.random();
    
    localStorage.setItem(testKey, testValue);
    const retrieved = localStorage.getItem(testKey);
    localStorage.removeItem(testKey);
    
    if (retrieved !== testValue) {
      console.error('❌ localStorage basic read/write test failed');
      return false;
    }
    console.log('✅ localStorage basic read/write working');

    // Test 3: JSON object storage
    const testObject = { test: true, timestamp: Date.now() };
    const testObjectKey = 'test-object-' + Date.now();
    
    localStorage.setItem(testObjectKey, JSON.stringify(testObject));
    const retrievedObject = JSON.parse(localStorage.getItem(testObjectKey) || '{}');
    localStorage.removeItem(testObjectKey);
    
    if (!retrievedObject.test) {
      console.error('❌ localStorage JSON object test failed');
      return false;
    }
    console.log('✅ localStorage JSON object storage working');

    // Test 4: Storage quota (rough estimate)
    const sampleData = JSON.stringify({ data: 'x'.repeat(1000) });
    localStorage.setItem('quota-test', sampleData);
    localStorage.removeItem('quota-test');
    console.log('✅ localStorage quota test passed');

    console.log('🎉 All localStorage tests passed!');
    return true;
    
  } catch (error) {
    console.error('❌ localStorage test failed:', error);
    return false;
  }
}

export function verifyCrossNavigationStorage(): boolean {
  console.log('🧭 Verifying cross-navigation localStorage...');
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    console.log('ℹ️ localStorage verification skipped (SSR environment)');
    return false;
  }
  
  const key = 'hotelAdminCrossNavigation';
  
  try {
    const stored = localStorage.getItem(key);
    
    if (!stored) {
      console.log('ℹ️ No cross-navigation data found in localStorage (this is normal on first load)');
      return false;
    }

    const parsed = JSON.parse(stored);
    
    console.log('✅ Cross-navigation data found in localStorage');
    console.log(`📊 Version: ${parsed.version}`);
    console.log(`📁 Modules: ${parsed.metadata?.totalModules || 'Unknown'}`);
    console.log(`🔗 Links: ${parsed.metadata?.totalRelatedLinks || 'Unknown'}`);
    console.log(`📐 Size: ${stored.length} characters`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Error verifying cross-navigation storage:', error);
    return false;
  }
}

export function clearCrossNavigationStorage(): void {
  console.log('🧹 Clearing cross-navigation localStorage...');
  localStorage.removeItem('hotelAdminCrossNavigation');
  console.log('✅ Cross-navigation storage cleared');
}

export function showAllLocalStorageData(): void {
  console.log('📋 All localStorage data:');
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    console.log('  (Not available in SSR environment)');
    return;
  }
  
  if (localStorage.length === 0) {
    console.log('  (No data found)');
    return;
  }
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key || '');
    console.log(`  🔑 ${key}: ${value?.length || 0} characters`);
  }
}

// For manual testing - import and call these functions when needed
export function runStorageTests(): void {
  console.log('🚀 Running localStorage verification...');
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    console.log('ℹ️ localStorage tests skipped (SSR environment)');
    return;
  }
  
  testLocalStorage();
  verifyCrossNavigationStorage();
}
