'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import PageForm from '@/components/admin/PageForm';
import { LandingPage } from '@/lib/firestore';

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [page, setPage] = useState<Partial<LandingPage> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch page data
  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/landing-pages/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Page not found');
          }
          throw new Error('Failed to load page');
        }

        const data = await response.json();
        setPage(data.data);
      } catch (err: any) {
        setError(err.message || 'Error loading page');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  const handleSubmit = async (formData: Partial<LandingPage>) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`/api/landing-pages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.errors?.[Object.keys(data.errors)[0]] || data.error || 'Failed to update page');
      }

      // Update local state
      setPage(formData);

      // Show success message
      alert('Page updated successfully');
    } catch (err: any) {
      setSubmitError(err.message || 'An error occurred');
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading page...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            href="/admin/dashboard"
            className="text-blue-600 hover:underline"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="text-blue-600 hover:text-blue-700 underline text-sm"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Edit Landing Page</h1>
            </div>
            {page && (
              <div className="text-right">
                <p className="text-sm text-gray-600">kashpages.in/<span className="font-mono font-bold">{page.slug}</span></p>
                {page.status === 'published' && (
                  <a
                    href={`https://kashpages.in/${page.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    View Live →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {(error || submitError) && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error || submitError}
          </div>
        )}

        {page && (
          <PageForm
            onSubmit={handleSubmit}
            initialData={page}
            isLoading={isSubmitting}
            submitLabel="Update Page"
          />
        )}
      </main>
    </div>
  );
}
