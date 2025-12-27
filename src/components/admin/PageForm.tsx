'use client';

import { useState, useEffect } from 'react';
import { generateSlug, validateLandingPageForm } from '@/lib/validation';
import { LandingPage } from '@/lib/firestore';

interface PageFormProps {
  onSubmit: (data: Partial<LandingPage>) => Promise<void>;
  initialData?: Partial<LandingPage>;
  isLoading?: boolean;
  submitLabel?: string;
}

export default function PageForm({
  onSubmit,
  initialData,
  isLoading = false,
  submitLabel = 'Save Page',
}: PageFormProps) {
  const [formData, setFormData] = useState<Partial<LandingPage>>({
    businessName: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    businessCategory: '',
    businessLocation: '',
    businessPhone: '',
    businessEmail: '',
    businessWebsite: '',
    htmlContent: '',
    status: 'draft',
    ...initialData,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => {
      const newData = { ...prev, title: value };
      // Auto-generate slug if it's empty or matches old generated slug
      if (!initialData?.slug || formData.slug === generateSlug(initialData.title || '')) {
        newData.slug = generateSlug(value);
      }
      return newData;
    });
  };

  const handleInputChange = (
    field: keyof LandingPage,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateLandingPageForm(formData as any);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error: any) {
      setErrors({ submit: error.message || 'An error occurred' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Business Info Section */}
      <fieldset className="border border-gray-200 rounded-lg p-6">
        <legend className="text-lg font-semibold text-gray-900 px-2">Business Information</legend>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name *
            </label>
            <input
              type="text"
              value={formData.businessName || ''}
              onChange={(e) => handleInputChange('businessName' as any, e.target.value)}
              onBlur={() => handleBlur('businessName')}
              placeholder="e.g., MITC Store"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.businessName && touched.businessName
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.businessName && touched.businessName && (
              <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              value={formData.businessCategory || ''}
              onChange={(e) => handleInputChange('businessCategory' as any, e.target.value)}
              onBlur={() => handleBlur('businessCategory')}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.businessCategory && touched.businessCategory
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            >
              <option value="">Select category</option>
              <option value="retail">Retail</option>
              <option value="food">Food & Beverage</option>
              <option value="services">Services</option>
              <option value="tech">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
            {errors.businessCategory && touched.businessCategory && (
              <p className="mt-1 text-sm text-red-600">{errors.businessCategory}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              value={formData.businessLocation || ''}
              onChange={(e) => handleInputChange('businessLocation' as any, e.target.value)}
              onBlur={() => handleBlur('businessLocation')}
              placeholder="e.g., Srinagar"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.businessLocation && touched.businessLocation
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.businessLocation && touched.businessLocation && (
              <p className="mt-1 text-sm text-red-600">{errors.businessLocation}</p>
            )}
          </div>

          {/* Phone (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              value={formData.businessPhone || ''}
              onChange={(e) => handleInputChange('businessPhone' as any, e.target.value)}
              onBlur={() => handleBlur('businessPhone')}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.businessPhone && touched.businessPhone
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.businessPhone && touched.businessPhone && (
              <p className="mt-1 text-sm text-red-600">{errors.businessPhone}</p>
            )}
          </div>

          {/* Email (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              value={formData.businessEmail || ''}
              onChange={(e) => handleInputChange('businessEmail' as any, e.target.value)}
              onBlur={() => handleBlur('businessEmail')}
              placeholder="contact@business.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.businessEmail && touched.businessEmail
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.businessEmail && touched.businessEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.businessEmail}</p>
            )}
          </div>

          {/* Website (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website (Optional)
            </label>
            <input
              type="url"
              value={formData.businessWebsite || ''}
              onChange={(e) => handleInputChange('businessWebsite' as any, e.target.value)}
              onBlur={() => handleBlur('businessWebsite')}
              placeholder="https://business.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.businessWebsite && touched.businessWebsite
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.businessWebsite && touched.businessWebsite && (
              <p className="mt-1 text-sm text-red-600">{errors.businessWebsite}</p>
            )}
          </div>
        </div>
      </fieldset>

      {/* SEO Section */}
      <fieldset className="border border-gray-200 rounded-lg p-6">
        <legend className="text-lg font-semibold text-gray-900 px-2">SEO & Publishing</legend>

        <div className="mt-6 space-y-6">
          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug * (URL: kashpages.in/<span className="font-mono text-blue-600">{formData.slug}</span>)
            </label>
            <input
              type="text"
              value={formData.slug || ''}
              onChange={(e) => handleInputChange('slug' as any, e.target.value)}
              onBlur={() => handleBlur('slug')}
              placeholder="my-business-name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition font-mono text-sm ${
                errors.slug && touched.slug
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.slug && touched.slug && (
              <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
            )}
          </div>

          {/* Meta Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Title * (Browser tab, search results)
            </label>
            <input
              type="text"
              value={formData.metaTitle || ''}
              onChange={(e) => handleInputChange('metaTitle' as any, e.target.value)}
              onBlur={() => handleBlur('metaTitle')}
              placeholder="My Business - Kashmir"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.metaTitle && touched.metaTitle
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.metaTitle && touched.metaTitle && (
              <p className="mt-1 text-sm text-red-600">{errors.metaTitle}</p>
            )}
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description * (160 chars max, shown in search results)
            </label>
            <textarea
              value={formData.metaDescription || ''}
              onChange={(e) => handleInputChange('metaDescription' as any, e.target.value)}
              onBlur={() => handleBlur('metaDescription')}
              placeholder="High-quality products and services for your needs..."
              rows={2}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.metaDescription && touched.metaDescription
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            <p className="mt-1 text-xs text-gray-500">
              {formData.metaDescription?.length || 0}/160 characters
            </p>
            {errors.metaDescription && touched.metaDescription && (
              <p className="mt-1 text-sm text-red-600">{errors.metaDescription}</p>
            )}
          </div>

          {/* OG Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OG Title * (Facebook, WhatsApp, LinkedIn share preview)
            </label>
            <input
              type="text"
              value={formData.ogTitle || ''}
              onChange={(e) => handleInputChange('ogTitle' as any, e.target.value)}
              onBlur={() => handleBlur('ogTitle')}
              placeholder="My Business - Visit Us Today!"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.ogTitle && touched.ogTitle
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.ogTitle && touched.ogTitle && (
              <p className="mt-1 text-sm text-red-600">{errors.ogTitle}</p>
            )}
          </div>

          {/* OG Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OG Description * (Share preview description)
            </label>
            <textarea
              value={formData.ogDescription || ''}
              onChange={(e) => handleInputChange('ogDescription' as any, e.target.value)}
              onBlur={() => handleBlur('ogDescription')}
              placeholder="Discover our amazing products and services..."
              rows={2}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.ogDescription && touched.ogDescription
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.ogDescription && touched.ogDescription && (
              <p className="mt-1 text-sm text-red-600">{errors.ogDescription}</p>
            )}
          </div>

          {/* OG Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL * (1200x630px recommended, shown in previews)
            </label>
            <input
              type="url"
              value={formData.ogImage || ''}
              onChange={(e) => handleInputChange('ogImage' as any, e.target.value)}
              onBlur={() => handleBlur('ogImage')}
              placeholder="https://firebaseapp.com/images/business.jpg"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                errors.ogImage && touched.ogImage
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.ogImage && touched.ogImage && (
              <p className="mt-1 text-sm text-red-600">{errors.ogImage}</p>
            )}
            {formData.ogImage && (
              <img
                src={formData.ogImage}
                alt="Preview"
                className="mt-4 max-w-xs rounded border border-gray-200"
              />
            )}
          </div>
        </div>
      </fieldset>

      {/* HTML Content Section */}
      <fieldset className="border border-gray-200 rounded-lg p-6">
        <legend className="text-lg font-semibold text-gray-900 px-2">Landing Page Content</legend>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            HTML Content * (Your page design - can include Tailwind CDN, custom CSS, JavaScript)
          </label>
          <textarea
            value={formData.htmlContent || ''}
            onChange={(e) => handleInputChange('htmlContent' as any, e.target.value)}
            onBlur={() => handleBlur('htmlContent')}
            placeholder="<section class='py-20'>...&lt;/section&gt;"
            rows={12}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition font-mono text-sm ${
              errors.htmlContent && touched.htmlContent
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          <p className="mt-2 text-xs text-gray-500">
            Paste your HTML content here. Inline CSS and external CDN libraries (Tailwind, Font Awesome, etc.) are supported.
          </p>
          {errors.htmlContent && touched.htmlContent && (
            <p className="mt-1 text-sm text-red-600">{errors.htmlContent}</p>
          )}
        </div>
      </fieldset>

      {/* Status & Submit */}
      <fieldset className="border border-gray-200 rounded-lg p-6">
        <legend className="text-lg font-semibold text-gray-900 px-2">Publish</legend>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Status
          </label>
          <div className="space-y-3">
            {(['draft', 'published'] as const).map((status) => (
              <label key={status} className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={formData.status === status}
                  onChange={(e) => handleInputChange('status' as any, e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-3 text-sm">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  {status === 'published' && (
                    <span className="ml-2 text-xs text-gray-500">(visible at kashpages.in/{formData.slug})</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      {/* Form Errors */}
      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {errors.submit}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Saving...' : submitLabel}
        </button>
      </div>
    </form>
  );
}
